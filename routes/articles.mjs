import express from "express";
import * as articleController from "../controllers/articleController.mjs";

const router = express.Router();

router.get("/", articleController.getArticles);

router.post("/", articleController.createArticle);
export default router;
