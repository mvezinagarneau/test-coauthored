import express from "express";
import * as articleController from "../controllers/articleController.mjs";

const router = express.Router();

router.get("/", articleController.getArticles);
router.get("/:id", articleController.getArticleById);
router.delete("/:id", articleController.deleteArticle);
router.put("/:id", articleController.updateArticle);
router.post("/", articleController.createArticle);
export default router;
