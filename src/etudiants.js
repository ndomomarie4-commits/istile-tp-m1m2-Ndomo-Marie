const arrondir = (valeur) => Math.round(valeur * 100) / 100;

export const moyenneGenerale = (liste) =>
  arrondir(liste.reduce((somme, { note }) => somme + note, 0) / liste.length);

export const admis = (liste) => liste.filter(({ note }) => note >= 10);

export const nomsFormates = (liste) =>
  liste.map(({ prenom, nom }) => `${nom.toUpperCase()} ${prenom}`);

export const effectifParFiliere = (liste) =>
  liste.reduce(
    (acc, { filiere }) => ({ ...acc, [filiere]: (acc[filiere] ?? 0) + 1 }),
    {}
  );

export const moyenneParFiliere = (liste) => {
  const cumuls = liste.reduce(
    (acc, { filiere, note }) => ({
      ...acc,
      [filiere]: {
        somme: (acc[filiere]?.somme ?? 0) + note,
        effectif: (acc[filiere]?.effectif ?? 0) + 1,
      },
    }),
    {}
  );

  return Object.fromEntries(
    Object.entries(cumuls).map(([filiere, { somme, effectif }]) => [
      filiere,
      arrondir(somme / effectif),
    ])
  );
};

export const classementParNote = (liste) =>
  [...liste].sort((a, b) => b.note - a.note);

export const majNote = (liste, id, note) =>
  liste.map((etudiant) =>
    etudiant.id === id ? { ...etudiant, note } : etudiant
  );