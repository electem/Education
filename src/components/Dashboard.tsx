import React from "react";
import "./styles.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>LevelUp</h2>
        <ul>
          <li>Learn Anything</li>
          <li>AI Chatbot</li>
          <li>Revise</li>
          <li>Knowledge Bank</li>
        </ul>
        <div className="user-section">
          <p>Carson</p>
          <button>Logout</button>
        </div>
      </aside>
      <main className="main-content">
        <header>
          <h1>Get actionable steps to learn anything</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="What do you want to learn today?"
            />
            <button>➤</button>
          </div>
        </header>
        <section className="content-section">
          <div className="learning-section">
            <h2>Continue Learning</h2>
            <div className="cards">
              <div className="card">
                <h3>Filing Taxes for Business Owners</h3>
                <p>4/10 Lessons</p>
                <progress value="40" max="100"></progress>
              </div>
              <div className="card">
                <h3>Facebook Marketing</h3>
                <p>6/20 Lessons</p>
                <progress value="30" max="100"></progress>
              </div>
              <div className="card">
                <h3>Python for Beginners</h3>
                <p>15/30 Lessons</p>
                <progress value="50" max="100"></progress>
              </div>
              <div className="card">
                <h3>Cold Outreach</h3>
                <p>9/10 Lessons</p>
                <progress value="40" max="100"></progress>
              </div>
            </div>
          </div>
          <div className="suggested-section">
            <h2>Suggested Topics</h2>
            <div className="cards">
              <div className="card">
                <h3>Basics of Learning</h3>
                <p>Learn how to retain information.</p>
              </div>
              <div className="card">
                <h3>Personal Finance</h3>
                <p>Explore managing money effectively.</p>
              </div>
              <div className="card">
                <h3>Nutrition and Exercise</h3>
                <p>Identify diet and exercise goals.</p>
              </div>
              <div className="card">
                <h3>Human Motivation</h3>
                <p>Understand why people are motivated.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
