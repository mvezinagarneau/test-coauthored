import { articles } from "./adminController.mjs";

/**
 * Méthode permettant de retourner la liste de tous les articles
 */
export function getArticles(req, res) {
  res.status(200).json(articles);
}

/**
 * Méthode permettant de retourner les détails d'un article spécifique en fonction de son ID
 */
export function getArticleById(req, res) {
  const id = parseInt(req.params.id); // Convertir l'ID de la chaîne de caractères en entier
  const article = articles.find((a) => a.id === id); // Rechercher l'article correspondant à l'ID dans la liste des articles

  if (article) {
    res.status(200).json(article); // Si l'article est trouvé, retourner les détails de l'article avec un statut 200 OK
  } else {
    res.status(404).json({ message: "Article non trouvé" }); // Si l'article n'est pas trouvé, retourner un message d'erreur avec un statut 404 Not Found
  }
}
