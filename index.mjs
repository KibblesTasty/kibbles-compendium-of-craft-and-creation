Hooks.once("init", () => {
  // Make Psionics a valid spellcasting school
  CONFIG.DND5E.spellSchools.psi = {
    label: "KCCC.SchoolPsi",
    icon: "modules/kibbles-compendium-of-craft-and-creation/assets/psionics.svg",
    fullKey: "psionic",
    reference: ""
  };

  // Add new class feature types for validation
  foundry.utils.mergeObject(CONFIG.DND5E.featureTypes.class.subtypes, {
    psionicTalent: "KCCC.PsionicTalent",
    psionicDiscipline: "KCCC.PsionicDiscipline",
    upgrade: "KCCC.Upgrade"
  })
});
