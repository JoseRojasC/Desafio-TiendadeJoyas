import express from "express";
import { listJewels, filterJewelry } from "../controllers/jewelry.controller.js";

const router = express.Router();

// Rutas
router.get("/joyas", listJewels);
router.get("/joyas/filtros", filterJewelry);

export default router;
