import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LearningItems.css";
import { fetchlearningOptions } from "../services/api";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

interface LearningProgress {
  id: string;
  title: string;
  lessonsCompleted: number;
  totalLessons: number;
  progress: number;
}

const LearningItems: React.FC = () => {
  const [learningProgressData, setLearningProgressData] = useState<LearningProgress[]>([]);
  const navigate = useNavigate(); // Initialize useNavigate
  useEffect(() => {
    const fetchLearningProgress = async () => {
      try {
        const data = await fetchlearningOptions();
        setLearningProgressData(data);
      } catch (error) {
        console.error("Error fetching learning progress data:", error);
      }
    };

    fetchLearningProgress();
  }, []);
  const handleGoBack = () => {
    navigate("/"); // Navigate back to the dashboard page
  };

  return (
    <div className="dashboard-containerSeeAll">
      <main className="main-contentSeeAll">
        <section className="content-sectionSeeAll">
          <div className="learning-sectionSeeAll">
          <h2>
              <span onClick={handleGoBack} className="go-back-button">
                <KeyboardArrowLeftIcon />
                Go Back
              </span>
              Your ongoing courses
            </h2>
            
            <div className="cards-wrapperSeeAll">

              <div className="cardsSeeAll">
                {learningProgressData.map((item) => (
                  <div key={item.id} className="cardSeeAll">
                    <h4>{item.title}</h4>
                    <p style={{ color: "#6b6b6b", fontSize: "13px" }}>
                      {item.lessonsCompleted}/{item.totalLessons} Lessons
                      <span>{item.progress}% Complete</span>
                    </p>
                    <progress className="progress-barSeeAll" value={item.progress} max={100}></progress>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LearningItems;
