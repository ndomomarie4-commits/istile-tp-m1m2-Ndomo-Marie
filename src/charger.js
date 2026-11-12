export async function chargerUtilisateurs(limite = 5, base = "https://dummyjson.com") {
  try {
    const response = await fetch(`${base}/users?limit=${limite}`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    const { users } = await response.json();

    return users.map(({ id, firstName, lastName, email }) => ({
      id,
      prenom: firstName,
      nom: lastName,
      email,
    }));
  } catch (erreur) {
    console.error(`Impossible de charger les utilisateurs : ${erreur.message}`);
    return [];
  }
}

export async function chargerUtilisateur(id, base = "https://dummyjson.com") {
  try {
    const response = await fetch(`${base}/users/${id}`);

    if (response.status === 404) {
      console.error(`Utilisateur ${id} introuvable (404)`);
      return null;
    }

    if (!response.ok) {
      console.error(`Erreur HTTP ${response.status} pour l'utilisateur ${id}`);
      return null;
    }

    return await response.json();
  } catch (erreur) {
    console.error(`Erreur réseau pour l'utilisateur ${id} : ${erreur.message}`);
    return null;
  }
}