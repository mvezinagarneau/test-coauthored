import express from "express";
import * as adminController from "../controllers/adminController.mjs";

const router = express.Router();

router.post("/articles", adminController.createArticle);

export default router;
