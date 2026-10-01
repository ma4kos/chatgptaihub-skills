/**
 * Template Generator core — browser + Node.
 * Emits MIT-aligned draft SKILL.md. Never auto-publishes to marketplace.json.
 */
(function (root, factory) {
  if (typeof module !== "undefined" && module.exports) {
    module.exports = factory();
  } else {
    root.TG = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var CATEGORIES = [
    "support",
    "sales",
    "ops",
    "finance",
    "content",
    "coding-assistant",
  ];

  var SECRET_PATTERNS = [
    /\bsk-[A-Za-z0-9_-]{10,}\b/,
    /\bBearer\s+[A-Za-z0-9._\-+=\/]{8,}/i,
    /-----BEGIN[ A-Z]*PRIVATE KEY-----/,
    /-----BEGIN CERTIFICATE-----/,
    /\b(?:api[_-]?key|token|password|secret)\s*[:=]\s*['\"]?[^\s'\"]{12,}/i,
    /(?:^|[^A-Za-z0-9+\/])[A-Za-z0-9+\/]{40,}={0,2}(?:$|[^A-Za-z0-9+\/])/,
  ];

  function slugify(name) {
    return String(name || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/-{2,}/g, "-");
  }

  function linesFromTextarea(text) {
    return String(text || "")
      .split(/\r?\n/)
      .map(function (l) {
        return l.replace(/^\s*[-*]\s*/, "").trim();
      })
      .filter(Boolean);
  }

  function numberedFromTextarea(text) {
    return String(text || "")
      .split(/\r?\n/)
      .map(function (l) {
        return l.replace(/^\s*\d+[.)]\s*/, "").trim();
      })
      .filter(Boolean);
  }

  function collectSecretHits(obj) {
    var blob = JSON.stringify(obj);
    var hits = [];
    SECRET_PATTERNS.forEach(function (re) {
      if (re.test(blob)) hits.push(String(re));
    });
    return hits;
  }

  function validate(form) {
    var errors = [];
    var name = (form.skill_name || "").trim();
    var slug = (form.skill_slug || "").trim();
    var category = (form.category || "").trim();
    var description = (form.description || "").trim();
    var goal = (form.goal || "").trim();
    var whenLines = linesFromTextarea(form.when_to_use);
    var inputLines = linesFromTextarea(form.inputs);
    var instructions = numberedFromTextarea(form.instructions);
    var outputFormat = (form.output_format || "").trim();
    var outOfScope = linesFromTextarea(form.out_of_scope);
    var envNames = linesFromTextarea(form.env_var_names);

    if (name.length < 2 || name.length > 100) {
      errors.push("skill_name must be 2–100 characters.");
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      errors.push("skill_slug must be lowercase kebab-case.");
    }
    if (CATEGORIES.indexOf(category) === -1) {
      errors.push("category must be one of: " + CATEGORIES.join(", "));
    }
    if (!description) errors.push("description is required.");
    if (!goal) errors.push("goal / Purpose is required.");
    if (!whenLines.length) errors.push("when_to_use needs at least one trigger line.");
    if (!inputLines.length) errors.push("inputs needs at least one item.");
    if (!instructions.length) errors.push("instructions needs at least one numbered step.");
    if (!outputFormat) errors.push("output_format is required.");
    if (!outOfScope.length) errors.push("out_of_scope needs at least one bullet.");
    var scopeJoined = outOfScope.join(" ").toLowerCase();
    if (!/auto-?send|auto send|no auto/.test(scopeJoined) && !/secret/.test(scopeJoined)) {
      errors.push("out_of_scope should mention no auto-send and/or no secrets.");
    }
    envNames.forEach(function (n) {
      if (!/^[A-Z][A-Z0-9_]*$/.test(n)) {
        errors.push("env var name invalid (UPPER_SNAKE only): " + n);
      }
    });

    var secretHits = collectSecretHits(form);
    if (secretHits.length) {
      errors.push(
        "Blocked: field content matches a secret pattern. Remove API keys/tokens/private keys before generating."
      );
    }

    return {
      ok: errors.length === 0,
      errors: errors,
      normalized: {
        skill_name: name,
        skill_slug: slug,
        category: category,
        description: description,
        goal: goal,
        when_to_use: whenLines,
        inputs: inputLines,
        instructions: instructions,
        output_format: outputFormat,
        out_of_scope: outOfScope,
        env_var_names: envNames,
        include_setup_stubs: !!form.include_setup_stubs,
        dry_run_input: (form.dry_run_input || "").trim(),
        dry_run_expected: (form.dry_run_expected || "").trim(),
      },
    };
  }

  function renderSkillMd(n) {
    var when = n.when_to_use
      .map(function (l) {
        return "- " + l;
      })
      .join("\n");
    var inputs = n.inputs
      .map(function (l, i) {
        return i + 1 + ". **" + l.replace(/\s+—\s+/, "** — ").replace(/\*\*(?!\s)/, "**");
      })
      .join("\n");
    // Fix inputs formatting: if user wrote "Name — format", keep; else wrap whole line
    inputs = n.inputs
      .map(function (l, i) {
        if (l.indexOf(" — ") !== -1 || l.indexOf(" - ") !== -1) {
          var parts = l.split(/\s+[—-]\s+/);
          return i + 1 + ". **" + parts[0] + "** — " + (parts.slice(1).join(" — ") || "text");
        }
        return i + 1 + ". **" + l + "** — text / paste";
      })
      .join("\n");
    var steps = n.instructions
      .map(function (l, i) {
        return i + 1 + ". " + l;
      })
      .join("\n");
    var scope = n.out_of_scope
      .map(function (l) {
        return "- " + l;
      })
      .join("\n");

    var envTable;
    if (n.env_var_names.length) {
      envTable =
        "| Variable | Required | Example placeholder | Purpose |\n" +
        "|----------|----------|---------------------|---------|\n" +
        n.env_var_names
          .map(function (v) {
            return "| `" + v + "` | no | `placeholder` | Non-secret setting or runtime secret **name** only |";
          })
          .join("\n");
    } else {
      envTable =
        "_No environment variables declared. Delete this section if still unused after editorial review._";
    }

    var dryIn = n.dry_run_input || "{short fictional paste}";
    var dryOut = n.dry_run_expected || "{what a good output looks like — no real customer data}";

    return [
      "---",
      "name: " + n.skill_slug,
      "description: " + n.description,
      "category: " + n.category,
      "version: 0.1.0",
      "status: draft",
      "license: MIT",
      "---",
      "",
      "# " + n.skill_name,
      "",
      "> Draft emitted by ChatGPTAIHub Template Generator (local/static). Pass `docs/QUALITY_BAR.md` before any catalog PR. **Never auto-published.**",
      "",
      "## Purpose",
      "",
      n.goal,
      "",
      "## When to use",
      "",
      when,
      "",
      "## Inputs",
      "",
      "Provide:",
      "",
      inputs,
      "",
      "## Instructions (follow in order)",
      "",
      steps,
      "",
      "## Output format",
      "",
      "```markdown",
      n.output_format,
      "```",
      "",
      "## Determinism rules",
      "",
      "- Prefer `UNASSIGNED` / `TBD` / `None reported.` over guessing",
      "- Same inputs → same structure and labels",
      "- Do not invent metrics, customers, or dates",
      "",
      "## Secrets",
      "",
      "**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**",
      "",
      "Keep any credentials in the host runtime secret store. Document **environment variable names only** — never values.",
      "",
      "## Environment (placeholders only — names, never values)",
      "",
      envTable,
      "",
      "## Out of scope",
      "",
      scope,
      "",
      "## Dry-run example (fictional)",
      "",
      "**Input:** " + dryIn,
      "",
      "**Expected shape:** " + dryOut,
      "",
    ].join("\n");
  }

  function renderSetupEnvSh(envNames) {
    var lines = [
      "# setup-env.example.sh — placeholders only; do not commit real values",
      "# MIT example stub from Template Generator",
    ];
    (envNames || []).forEach(function (n) {
      lines.push('export ' + n + '="placeholder"');
    });
    if (!(envNames || []).length) {
      lines.push('# export EXAMPLE_SETTING="friendly-concise"');
    }
    lines.push('# export SOME_API_KEY="<<set in runtime secret store>>"');
    return lines.join("\n") + "\n";
  }

  function renderCodexToml(envNames) {
    var lines = [
      "# cloud-env.codex.example.toml — PATTERN ONLY",
      "[skill.env]",
    ];
    (envNames || []).forEach(function (n) {
      lines.push(n + ' = "placeholder"');
    });
    if (!(envNames || []).length) {
      lines.push('EXAMPLE_SETTING = "friendly-concise"');
    }
    lines.push("# [skill.secrets] — names only; values from host secret store");
    return lines.join("\n") + "\n";
  }

  function generate(form) {
    var v = validate(form);
    if (!v.ok) {
      return { ok: false, errors: v.errors };
    }
    var md = renderSkillMd(v.normalized);
    var out = {
      ok: true,
      skill_md: md,
      stubs: null,
    };
    if (v.normalized.include_setup_stubs) {
      out.stubs = {
        setup_env_sh: renderSetupEnvSh(v.normalized.env_var_names),
        cloud_env_toml: renderCodexToml(v.normalized.env_var_names),
      };
    }
    return out;
  }

  /** Acceptance tests AT1–AT7 (Node or browser). */
  function runAcceptanceTests() {
    var results = [];
    function check(id, pass, detail) {
      results.push({ id: id, pass: !!pass, detail: detail || "" });
    }

    var base = {
      skill_name: "Harbor Close Checklist",
      skill_slug: "harbor-close-checklist",
      category: "ops",
      description: "Turn café closing bullets into a day-of checklist.",
      goal: "Produce a numbered closing checklist with stop conditions from pasted bullets.",
      when_to_use: "End of shift closing\nNot for: alarm codes or POS passwords",
      inputs: "Closing bullets — plain text\nShift date — YYYY-MM-DD optional",
      instructions:
        "Read bullets without inventing steps\nNormalize into numbered checklist\nEmit output table; no send side effects",
      output_format: "# Closing checklist\n\n| Step | Done |\n|------|------|\n| ... | [ ] |",
      out_of_scope: "No auto-send of checklists\nNo secrets in outputs",
      env_var_names: "",
      include_setup_stubs: false,
      dry_run_input: "Wipe counters; lock patio; count tips",
      dry_run_expected: "Numbered checklist with UNASSIGNED owners if missing",
    };

    // AT1
    var g1 = generate(base);
    check(
      "AT1",
      g1.ok &&
        /## Purpose/.test(g1.skill_md) &&
        /## Secrets/.test(g1.skill_md) &&
        /NEVER embed API keys/.test(g1.skill_md) &&
        /## Determinism rules/.test(g1.skill_md) &&
        /## Out of scope/.test(g1.skill_md) &&
        /status: draft/.test(g1.skill_md) &&
        /license: MIT/.test(g1.skill_md),
      g1.ok ? "sections present" : (g1.errors || []).join("; ")
    );

    // AT2
    check(
      "AT2",
      slugify("My Cool Skill!") === "my-cool-skill",
      "slugify => " + slugify("My Cool Skill!")
    );

    // AT3 empty env names still has Secrets
    var g3 = generate(Object.assign({}, base, { env_var_names: "" }));
    check(
      "AT3",
      g3.ok && /## Secrets/.test(g3.skill_md) && /NEVER embed/.test(g3.skill_md),
      g3.ok ? "secrets section kept" : (g3.errors || []).join("; ")
    );

    // AT4 empty goal blocked
    var g4 = generate(Object.assign({}, base, { goal: "" }));
    check("AT4", !g4.ok && (g4.errors || []).some(function (e) { return /goal/i.test(e); }), (g4.errors || []).join("; "));

    // AT5 secret-looking token blocked; no emit containing it
    var secret = "sk-live-THISISFAKESECRETVALUE99";
    var g5 = generate(Object.assign({}, base, { goal: "Use key " + secret + " somehow" }));
    check(
      "AT5",
      !g5.ok && !g5.skill_md,
      g5.ok ? "FAIL emitted" : "blocked: " + (g5.errors || []).join("; ")
    );

    // AT6 stubs on + SUPPORT_TONE
    var g6 = generate(
      Object.assign({}, base, {
        env_var_names: "SUPPORT_TONE",
        include_setup_stubs: true,
      })
    );
    check(
      "AT6",
      g6.ok &&
        g6.stubs &&
        /export SUPPORT_TONE="placeholder"/.test(g6.stubs.setup_env_sh) &&
        !/sk-/.test(g6.stubs.setup_env_sh),
      g6.ok ? "stub ok" : (g6.errors || []).join("; ")
    );

    // AT7 categories exactly six
    check(
      "AT7",
      CATEGORIES.length === 6 &&
        CATEGORIES.join(",") ===
          "support,sales,ops,finance,content,coding-assistant",
      CATEGORIES.join(", ")
    );

    var passed = results.filter(function (r) { return r.pass; }).length;
    return {
      results: results,
      passed: passed,
      total: results.length,
      ok: passed === results.length,
    };
  }

  return {
    CATEGORIES: CATEGORIES,
    slugify: slugify,
    validate: validate,
    generate: generate,
    renderSkillMd: renderSkillMd,
    renderSetupEnvSh: renderSetupEnvSh,
    renderCodexToml: renderCodexToml,
    runAcceptanceTests: runAcceptanceTests,
  };
});
