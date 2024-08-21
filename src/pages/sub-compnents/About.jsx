/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./About.css"; // Ensure this file contains the CSS above

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="about-container">
      <div
        className={`book ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="book-inner">
          <div className="book-front">
            <span className="cover-title">ABOUT ME</span>
          </div>
          <div className="book-back">
            <div className="page-content">
              <div className="left-page">
                <img
                  src="/Profile.jpg"
                  alt="Profile"
                  className="profile-image object-contain"
                />
              </div>
              <div className="right-page">
                <h1>Abhishek Mishra</h1>
                <p>
                  I'm a final-year Computer Science student at Panjab University
                  focusing on full-stack development. With experience in the
                  MERN stack, C++, and data structures, I'm passionate about
                  building scalable solutions and continuously learning.
                </p>
                <p>
                  Besides tech, I'm into cricket, volleyball, movies, gaming,
                  and cooking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
