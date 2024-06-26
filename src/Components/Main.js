import React from "react";
import { assets } from "../Assets/Data/assetsimg";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini </p>
        <img src={assets.usericon} alt="usericon" className="user-icon" />
      </div>
      <div className="main-container">
        <div className="greeting">
          <p>
            <span>Hello Zahra.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img
              src={assets.compassicon}
              alt="compass icon"
              className="compass-icon"
            />
          </div>
          <div className="card">
            <p>Brainstorm road trip ideas</p>
            <img src={assets.bulbicon} alt="bulbicon" className="bulb-icon" />
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img
              src={assets.messageicon}
              alt="message icon"
              className="message-icon"
            />
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.codeicon} alt="code icon" className="code-icon" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="searching">
            <input type="text" placeholder="Enter query here" />
            <div>
              <img
                src={assets.galleryicon}
                alt="galleryicon"
                className="gallery-icon"
              />
              <img src={assets.micicon} alt="micicon" className="mic-icon" />
              <img src={assets.sendicon} alt="sendicon" className="send-icon" />
            </div>
          </div>
        </div>
        <div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <span className="bottomstyle">Your privacy and Gemini Apps</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
