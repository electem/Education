import React, { useState } from "react";
import "./styles.css";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import StorageIcon from '@mui/icons-material/Storage';
import icon from '../assets/icon.png';
import UserDropdown from "./userdropdown";
import './sidebar.css'

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <h3 className="side-h3" onClick={toggleSidebar}>
        <img src={icon}  alt="" />
        {!isCollapsed && <span>&nbsp; LevelUp</span>}
      </h3>
      <ul>
        <li className="active">
          <EmojiObjectsIcon />
          {!isCollapsed && <span>&nbsp; Learn Anything</span>}
        </li>
        <li>
          <SmartToyIcon />
          {!isCollapsed && <span>&nbsp; AI Chatbot</span>}
        </li>
        <li>
          <ImportContactsIcon />
          {!isCollapsed && <span>&nbsp; Revise</span>}
        </li>
        <li>
          <StorageIcon />
          {!isCollapsed && <span>&nbsp; Knowledge Bank</span>}
        </li>
      </ul>
      {!isCollapsed && <UserDropdown />}
    </aside>
  );
};

export default Sidebar;
