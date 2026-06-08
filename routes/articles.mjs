import express from "express";
import * as articleController from "../controllers/articleController.mjs";

const router = express.Router();

// GET /articles - Retourne la liste de tous les articles
router.get("/", articleController.getArticles);

// GET /articles/:id - Retourne les détails d'un article spécifique en fonction de son ID
router.get("/:id", articleController.getArticleById);

router.post("/", articleController.createArticle);

// PUT /articles/:id - Met à jour un article spécifique en fonction de son ID
router.put("/:id", articleController.updateArticle);

export default router;
