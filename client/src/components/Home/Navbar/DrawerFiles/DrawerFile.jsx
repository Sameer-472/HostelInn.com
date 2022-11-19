import React from "react";
import { AppBar, Toolbar, styled, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DrawerMain from "./DrawerMain";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const Image = styled("img")({
  fontSize: 80,
  height: 80,
  width: "auto",
  cursor: "pointer",
  //   alignItems: "center",
});
function DrawerFile() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position='sticky'>
        <Toolbar
          style={{
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          <Link to='/' style={{ maxHeight: 80 }}>
            <Image src={require("../assets/hostelin-logo.png")} alt='logo' />
          </Link>

          <IconButton
            onClick={() => handleClose()}
            style={{ marginLeft: "auto" }}
          >
            <MenuIcon style={{ color: "orange" }} />
          </IconButton>
          <DrawerMain open={open} onClose={handleClose} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default DrawerFile;
