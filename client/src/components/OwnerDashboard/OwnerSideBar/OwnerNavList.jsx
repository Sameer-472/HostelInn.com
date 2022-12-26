import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import BusinessIcon from "@mui/icons-material/Business";

const LinkComponent = styled(ListItem)`
  & > a.active {
    background-color: #4d148c;
    color: white;
    & > div {
      color: white;
    }
  }

  & > a:hover {
    color: #4d148c;
    font-weight: 600;
  }
`;

function OwnerNavList({ open }) {
  const listItem = [
    {
      id: 1,
      name: "Dashboard",
      icon: <BusinessIcon />,
      route: "dashboard",
    },
    {
      id: 2,
      name: "Hostel",
      icon: <HomeIcon />,
      route: "hostel",
    },
    {
      id: 3,
      name: "Bookings",
      icon: <AssignmentTurnedInIcon />,
      route: "booking",
    },
    { id: 4, name: "Profile", icon: <PersonIcon />, route: "profile" },
  ];
  return (
    <>
      <List>
        {listItem.map((list) => (
          <LinkComponent key={list.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              className='LinkComponent'
              component={NavLink}
              to={list.route}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 1,
                  justifyContent: "center",
                  color: "#4D148C",
                }}
              >
                {list.icon}
              </ListItemIcon>
              <ListItemText
                primary={list.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </LinkComponent>
        ))}
      </List>
    </>
  );
}

export default OwnerNavList;
