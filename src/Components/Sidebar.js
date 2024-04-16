import React from "react";
import { assets } from "../Assets/Data/assetsimg";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="top">
        <img src={assets.menuicon} alt="menu icon" className="menu-icon" />
        <div className="newchat">
          <img src={assets.plusicon} alt="plus icon" className="plus-icon" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p className="recenttitle">Recent</p>
          <div className="recententry">
            <img src={assets.messageicon} alt="message icon" className="message-icon" />
            <p>What is React....</p>
          </div>
        </div>
      </div>
      <div className="botttom">
        <div className="bottomitem recententry">
        <img src={assets.questionicon} alt="question icon" className="question-icon" />
        <p>Help</p>
        </div>
        <div className="bottomitem recententry">
        <img src={assets.historyicon} alt="history icon" className="history-icon" />
        <p>Activity</p>
        </div>
        <div className="bottomitem recententry">
        <img src={assets.settingicon} alt="setting icon" className="setting-icon" />
        <p>Setting</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
