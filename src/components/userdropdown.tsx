import React, { useEffect, useState } from "react";
import "./userdropdown.css"; // Create a CSS file for styles
import { fetchSidebarOptions } from "../services/api";
import LogoutIcon from '@mui/icons-material/Logout';

const UserDropdown: React.FC = () => {
    const [userName, setUserName] = useState<string>("");
    const [profile, setProfile] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSidebarOptions();
      if (data && data.name) {
        setUserName(data.name); // Assuming the API response contains a `name` field
      }
      if (data && data.profile) {
        setProfile(data.profile); // Assuming the API response contains a `name` field
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`user-dropdown ${isOpen ? "open" : ""}`}>
      <div className="user-info" onClick={toggleDropdown}>
        <img
          src={profile} // Replace with your image URL
          alt=""
          className="profile-picture"
        />
        <span className="user-name">{userName}</span>
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      <div className={`dropdown-menu ${isOpen ? "slide-down" : "slide-up"}`}>
        <button className="logout-button">
          <span className="logout-icon"><LogoutIcon/></span> Logout
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
