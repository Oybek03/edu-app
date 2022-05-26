import React from "react";

const Home = () => {
  return (
    <div>
      <div className="navigation-flex">
        <div className="home-nav">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <h1>EDUCATION</h1>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Teachers</a>
            </li>
            <li>
              <a href="#">Programs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};
export default Home;
