const articles = [
  { id: 1, titre: "Article 1" },
  { id: 2, titre: "Article 2" },
  { id: 3, titre: "Article 3" },
];

export { articles }; // Exporter la liste des articles pour qu'elle puisse être utilisée dans d'autres modules

export function createArticle(req, res) {
  articles.push(req.body); // Ajouter l'article à la liste (en mémoire)

  res.location(`/articles/${req.body.id}`); // Définir l'en-tête Location pour indiquer l'URL du nouvel article

  // Répondre avec un statut 201 Created et les détails de l'article ajouté
  res.status(201).json({
    message: "Article ajouté avec succès",
    data: req.body,
  });
}
