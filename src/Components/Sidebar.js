import React, { useState } from "react";
import { assets } from "../Assets/Data/assetsimg";

const Sidebar = () => {
  const [isopen, setIsOpen] = useState(false);

  return (
    <div className="sidebar-container">
      <div className="top">
        <img src={assets.menuicon} alt="menu icon" className="menu-icon" />
        <div className="newchat">
          <img src={assets.plusicon} alt="plus icon" className="plus-icon" />
          {isopen ? <p>New Chat</p> : null}
        </div>
        {isopen ? (
          <div className="recent">
            <p className="recenttitle">Recent</p>
            <div className="recententry">
              <img
                src={assets.messageicon}
                alt="message icon"
                className="message-icon"
              />
              <p>What is React....</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="botttom">
        <div className="bottomitem recententry">
          <img
            src={assets.questionicon}
            alt="question icon"
            className="question-icon"
          />
          {isopen ? <p>Help</p> : null }
        </div>
        <div className="bottomitem recententry">
          <img
            src={assets.historyicon}
            alt="history icon"
            className="history-icon"
          />
         {isopen ? <p>Activity</p> : null} 
        </div>
        <div className="bottomitem recententry">
          <img
            src={assets.settingicon}
            alt="setting icon"
            className="setting-icon"
          />
          {isopen ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
