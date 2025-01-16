import { Router } from "express";
import { getLearningProgress, getSuggestedTopics, getUserDetails } from "../controllers/dashboard.controller";

const router = Router();

router.get("/learning-progress", getLearningProgress);
router.get("/suggested-topics", getSuggestedTopics);
router.get("/user", getUserDetails);

export default router;
