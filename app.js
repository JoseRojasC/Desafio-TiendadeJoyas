import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import JewelRoutes from "./routes/jewelroutes.js";
import { logger } from "./middlewares/logger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Rutas
app.use(JewelRoutes);

// Servidor
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
