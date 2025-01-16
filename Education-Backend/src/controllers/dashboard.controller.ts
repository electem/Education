import { Request, Response } from "express";
import { LearningProgress } from "../models/LearningProgress";
import { SuggestedTopic } from "../models/SuggestedTopics";

// Mock data for learning progress
const learningProgressData: LearningProgress[] = [
  { id: "1", title: "Filing Taxes for Business Owners", lessonsCompleted: 4, totalLessons: 10, progress: 40 },
  { id: "2", title: "Facebook Marketing", lessonsCompleted: 6, totalLessons: 20, progress: 30 },
  { id: "3", title: "Python for Beginners", lessonsCompleted: 15, totalLessons: 30, progress: 50 },
  { id: "4", title: "Cold Outreach", lessonsCompleted: 9, totalLessons: 10, progress: 90 },
];

// Mock data for suggested topics
const suggestedTopicsData: SuggestedTopic[] = [
  { id: "1", title: "Basics of Learning", description: "Learn how to retain information." },
  { id: "2", title: "Personal Finance", description: "Explore managing money effectively." },
  { id: "3", title: "Nutrition and Exercise", description: "Identify diet and exercise goals." },
  { id: "4", title: "Human Motivation", description: "Understand why people are motivated." },
];

// Controller functions
export const getLearningProgress = (req: Request, res: Response) => {
  res.status(200).json(learningProgressData);
};

export const getSuggestedTopics = (req: Request, res: Response) => {
  res.status(200).json(suggestedTopicsData);
};

export const getUserDetails = (req: Request, res: Response) => {
  res.status(200).json({
    name: "Carson",
    status: "active",
  });
};
