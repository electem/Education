import express from "express";
import cors from "cors";
import dashboardRoutes from "./routes/dashboard.routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/dashboard", dashboardRoutes);

export default app;
