Hooks.once('init', () => {
  // Make Psionics a valid spellcasting school
  CONFIG.DND5E.spellSchools.psi = {
    label: 'KCCC.SchoolPsi',
    icon: 'modules/kibbles-compendium-of-craft-and-creation/assets/psionics.svg',
    fullKey: 'psionic',
    reference: '',
  };

  // Add new class feature types for validation
  Object.assign(CONFIG.DND5E.featureTypes.class.subtypes, {
    psionicTalent: 'KCCC.PsionicTalent',
    psionicDiscipline: 'KCCC.PsionicDiscipline',
    upgrade: 'KCCC.Upgrade',
  });

  CONFIG.DND5E.skills.psi = {
    label: 'Psionics',
    ability: 'int',
    fullKey: 'psionics',
    icon: 'modules/kibbles-compendium-of-craft-and-creation/assets/psionics.svg',
    reference: 'Compendium.kibbles-compendium-of-craft-and-creation.kccc-journals.JournalEntry.22xGZTi3QtxVkqUH.JournalEntryPage.88IVFMQiTyGjoXEP'
  };
});
