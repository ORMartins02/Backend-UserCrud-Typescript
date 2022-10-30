import { Router } from "express";
import { createSessionsController } from "../controllers/createSessions.controller";

export const sessionRoutes = Router();

sessionRoutes.post("", createSessionsController);
