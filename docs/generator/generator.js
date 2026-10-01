(function () {
  "use strict";
  var form = document.getElementById("tg-form");
  var nameEl = document.getElementById("skill_name");
  var slugEl = document.getElementById("skill_slug");
  var errEl = document.getElementById("form-error");
  var okEl = document.getElementById("form-ok");
  var outEl = document.getElementById("skill-out");
  var stubEl = document.getElementById("stub-out");
  var copyBtn = document.getElementById("btn-copy");
  var slugTouched = false;

  slugEl.addEventListener("input", function () {
    slugTouched = true;
  });
  nameEl.addEventListener("input", function () {
    if (!slugTouched) slugEl.value = TG.slugify(nameEl.value);
  });

  function readForm() {
    return {
      skill_name: nameEl.value,
      skill_slug: slugEl.value,
      category: document.getElementById("category").value,
      description: document.getElementById("description").value,
      goal: document.getElementById("goal").value,
      when_to_use: document.getElementById("when_to_use").value,
      inputs: document.getElementById("inputs").value,
      instructions: document.getElementById("instructions").value,
      output_format: document.getElementById("output_format").value,
      out_of_scope: document.getElementById("out_of_scope").value,
      env_var_names: document.getElementById("env_var_names").value,
      include_setup_stubs: document.getElementById("include_setup_stubs").checked,
      dry_run_input: document.getElementById("dry_run_input").value,
      dry_run_expected: document.getElementById("dry_run_expected").value,
    };
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    errEl.hidden = true;
    okEl.hidden = true;
    var result = TG.generate(readForm());
    if (!result.ok) {
      errEl.textContent = result.errors.join("\n");
      errEl.hidden = false;
      copyBtn.disabled = true;
      outEl.textContent = "Generate blocked — fix validation errors.";
      stubEl.textContent = "";
      return;
    }
    outEl.textContent = result.skill_md;
    if (result.stubs) {
      stubEl.textContent =
        "=== setup-env.example.sh ===\n" +
        result.stubs.setup_env_sh +
        "\n=== cloud-env.codex.example.toml ===\n" +
        result.stubs.cloud_env_toml;
    } else {
      stubEl.textContent = "Stubs not requested.";
    }
    copyBtn.disabled = false;
    okEl.textContent = "Draft SKILL.md ready (MIT). Not written to marketplace.json.";
    okEl.hidden = false;
  });

  copyBtn.addEventListener("click", function () {
    var text = outEl.textContent || "";
    if (!text || text.indexOf("Generate") === 0) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        okEl.textContent = "Copied SKILL.md to clipboard.";
        okEl.hidden = false;
      });
    } else {
      okEl.textContent = "Clipboard API unavailable — select the output and copy manually.";
      okEl.hidden = false;
    }
  });

  document.getElementById("btn-clear").addEventListener("click", function () {
    form.reset();
    slugTouched = false;
    copyBtn.disabled = true;
    outEl.textContent = "Generate to see SKILL.md…";
    stubEl.textContent = "Enable “Include setup-env / Codex stub panes” to emit example files.";
    errEl.hidden = true;
    okEl.hidden = true;
  });
})();
