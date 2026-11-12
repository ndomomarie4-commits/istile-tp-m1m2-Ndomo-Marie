# Réponses - Partie C : Lecture de HTTP

## Question 1
Pour la requête vers /users/1 :
- Méthode : GET
- Code d'état : 200
- Content-Type : application/json; charset=utf-8
- Deux champs du JSON : firstName et lastName

## Question 2
Pour /users/99999, j'obtiens le code 404. Il signifie que la ressource demandée n'existe pas (aucun utilisateur avec l'id 99999). L'interface doit afficher un message clair, par exemple « Cet étudiant n'est pas présent dans notre annuaire », sans planter et sans afficher de données vides.

## Question 3
- (a) Afficher un message d'erreur sous un champ : côté client (le navigateur modifie la page affichée).
- (b) Enregistrer une note dans la base de données : côté serveur (la base de données est sur le serveur).
- (c) Vérifier un mot de passe : côté serveur (le navigateur ne doit pas décider de la sécurité).
- (d) Changer la couleur d'un bouton au survol : côté client (effet visuel local).
- (e) Décider qu'un utilisateur n'a pas le droit de supprimer une note : côté serveur (les droits d'accès doivent être contrôlés là où l'utilisateur ne peut pas les modifier).

## Question 4
- 201 : une ressource a été créée avec succès. L'interface confirme l'opération (message « Ajouté »).
- 401 : l'utilisateur n'est pas authentifié. L'interface demande de se connecter.
- 404 : la ressource n'existe pas. L'interface affiche « introuvable » sans planter.
- 500 : erreur interne du serveur. L'interface affiche « Une erreur est survenue, réessayez plus tard ».
