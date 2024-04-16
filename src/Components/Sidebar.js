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
          <p className="recenttitle">New Chat</p>
          <div className="recententry">
            <img src={assets.menuicon} alt="menu icon" className="menu-icon" />
          </div>
        </div>
        <div className="botttom"></div>
      </div>
    </div>
  );
};

export default Sidebar;
