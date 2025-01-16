import React, { useEffect, useState } from "react";
import "./styles.css";
import { fetchlearningOptions, fetchsuggestedOptions } from "../services/api";
import dashicon from '../assets/dashicon.png';
import NearMeIcon from '@mui/icons-material/NearMe';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Define types for data
interface LearningProgress {
  id: string;
  title: string;
  lessonsCompleted: number;
  totalLessons: number;
  progress: number;
}

interface SuggestedTopic {
  id: string;
  title: string;
  description: string;
}

const Dashboard: React.FC = () => {
  // State to store fetched data
  const [learningProgressData, setLearningProgressData] = useState<LearningProgress[]>([]);
  const [suggestedTopicsData, setSuggestedTopicsData] = useState<SuggestedTopic[]>([]);

  // State to manage the current index of learning progress
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Fetch learning progress data from the backend API
  useEffect(() => {
    const fetchLearningProgress = async () => {
      try {
        const data = await fetchlearningOptions();
        setLearningProgressData(data);
      } catch (error) {
        console.error("Error fetching learning progress data:", error);
      }
    };

    // Fetch suggested topics data from the backend API
    const fetchSuggestedTopics = async () => {
      try {
        const data = await fetchsuggestedOptions();
        setSuggestedTopicsData(data);
      } catch (error) {
        console.error("Error fetching suggested topics data:", error);
      }
    };

    fetchLearningProgress();
    fetchSuggestedTopics();
  }, []);

  // Handle sliding to the next item
  const handleNext = () => {
    if (currentIndex < learningProgressData.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      // Optionally fetch more data if required
    }
  };

  // Handle sliding to the previous item
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  // Get the current learning progress items to display
  const currentLearningProgressItems = learningProgressData.slice(currentIndex, currentIndex + 4);

  return (
    <div className="dashboard-container">
      <main className="main-content">
        <header>
          <img src={dashicon} height={100} width={170} alt="" />
          <h1>
            Get actionable steps <br />
            to learn anything
          </h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="What do you want to learn today?"
            />
            <button><NearMeIcon /></button>
          </div>
        </header>
        <section className="content-section">
          <div className="learning-section">
            <h2>Continue Learning <span> See All <KeyboardArrowRightIcon/></span></h2>
            
            <div className="cards-wrapper">
              <button
                className="arrow-left"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                {"<"}
              </button>

              <div className="cards">
                {currentLearningProgressItems.map((item) => (
                  <div key={item.id} className="card">
                    <h4>{item.title}</h4>
                    <p style={{ color: "#6b6b6b", fontSize: "14px" }}>
                      {item.lessonsCompleted}/{item.totalLessons} Lessons
                      <span>{item.progress}% Complete</span>
                    </p>
                    <progress className="progress-bar" value={item.progress} max={100}></progress>
                  </div>
                ))}
              </div>

              <button
                className="arrow-right"
                onClick={handleNext}
                disabled={currentIndex >= learningProgressData.length - 1}
              >
                {">"}
              </button>
            </div>
          </div>

          <div className="suggested-section">
            <h2>Suggested Topics</h2>
            <div className="cards">
              {suggestedTopicsData.map((topic) => (
                <div key={topic.id} className="card">
                  <h4>{topic.title}</h4>
                  <p style={{ fontSize: '13px' }}>{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
