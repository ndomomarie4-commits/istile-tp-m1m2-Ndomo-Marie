import { readFile } from "node:fs/promises";
import {
  moyenneGenerale,
  admis,
  nomsFormates,
  effectifParFiliere,
  moyenneParFiliere,
  classementParNote,
  majNote,
} from "./etudiants.js";

const etudiants = JSON.parse(
  await readFile(new URL("../data/etudiants.json", import.meta.url), "utf8")
);

console.log("Moyenne générale :", moyenneGenerale(etudiants));
console.log("Admis :", admis(etudiants));
console.log("Noms formatés :", nomsFormates(etudiants));
console.log("Effectif par filière :", effectifParFiliere(etudiants));
console.log("Moyenne par filière :", moyenneParFiliere(etudiants));

// Preuve d'immutabilité 1 : classementParNote ne modifie pas la liste d'origine
const premierAvant = etudiants[0];
const classement = classementParNote(etudiants);
console.log("Classement :", classement);
console.log(
  "Premier étudiant de la liste d'origine inchangé :",
  etudiants[0] === premierAvant
);

// Preuve d'immutabilité 2 : majNote crée un nouvel objet
const idModifie = etudiants[0].id;
const nouvelleListe = majNote(etudiants, idModifie, 20);
const ancien = etudiants.find(({ id }) => id === idModifie);
const nouveau = nouvelleListe.find(({ id }) => id === idModifie);
console.log("Objets différents :", ancien !== nouveau);
console.log(`Ancienne note : ${ancien.note} / nouvelle note : ${nouveau.note}`);