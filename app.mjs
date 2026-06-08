import express from "express";

import articleRoutes from "./routes/articles.mjs"; // Importer les routes publiques
import adminRoutes from "./routes/admin.mjs"; // Importer les routes administrateur (qui contiennent aussi les données des articles)

const app = express();
const PORT = 3000;

/**
 * Middleware global pour lire le JSON
 */
app.use(express.json());

/**
 * Route d'accueil
 */
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Bienvenue sur l’API du blogue",
  });
});

/**
 * Routes publiques
 */
app.use("/articles", articleRoutes);

/**
 * Routes administrateur
 */
app.use("/admin", adminRoutes);

/**
 * Middleware 404 (toujours à la fin)
 */
app.use((req, res) => {
  res.status(404).json({
    message: "Route introuvable",
  });
});

/**
 * Démarrage du serveur
 */
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
