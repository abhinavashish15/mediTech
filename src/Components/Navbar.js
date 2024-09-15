import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { FaSearch } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { List } from "@mui/material";
import FAQ from './FAQ';

import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = ({ onFAQClick }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  const handleFAQToggle = () => {
    setShowFAQ((prevState) => !prevState);
  };

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "eConsultation",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Patients",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Events",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Donate",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Research",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-links-container">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">eConsultation</a>
        <a href="#">Patients</a>
        <a href="#">Events</a>
        <a href="#">Donate</a>
        <a href="#">Research</a>
        <a href="#">Contact</a>
        <a href="#">
          <FaSearch className="navbar-search-icon" />
        </a>
        <button className="primary-button" onClick={handleFAQToggle}>FAQ's</button>
      </div>
      {showFAQ && (
        <div className="faq-overlay">
          <FAQ />
        </div>
      )}

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
