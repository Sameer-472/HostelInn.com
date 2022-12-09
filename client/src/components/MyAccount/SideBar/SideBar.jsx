import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiDrawer from "@mui/material/Drawer";

import Divider from "@mui/material/Divider";

import NavList from "./NavList";
import { ArrowBack } from "@mui/icons-material";
import { Outlet } from "react-router-dom";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  marginTop: 100,
  display: "flex",
  justifyContent: "center",
  // alignItems: "center",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar() {
  const [open, setOpen] = React.useState(false);
  console.log(open);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          // PaperProps={{ sx: { backgroundColor: "#FF6600" } }}
          sx={{ zIndex: 1000 }}
          variant='permanent'
          open={open}
        >
          <DrawerHeader>
            {open ? (
              <ArrowBack
                style={{
                  marginLeft: "auto",
                  marginRight: 15,
                  cursor: "pointer",
                  color: "#FF6600",
                }}
                onClick={handleDrawerClose}
              />
            ) : (
              <ArrowForwardIcon
                style={{ color: "#FF6600", cursor: "pointer" }}
                onClick={handleDrawerOpen}
              />
            )}
          </DrawerHeader>
          <Divider className='divider' />
          <NavList open={open} />
        </Drawer>

        <Box sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

{
  /* <Drawer variant='permanent' open={open}>
          <DrawerHeader>
            <IconButton>
              {open ? (
                <ArrowBack onClick={handleDrawerClose} />
              ) : (
                <MenuIcon onClick={handleDrawerOpen} />
              )}
            </IconButton>
          </DrawerHeader>

          <NavList open={open} />
        </Drawer> */
}

{
  /* <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          PaperProps={{ sx: { backgroundColor: "#FF6600" } }}
          sx={{ zIndex: 1000 }}
          variant='permanent'
          open={open}
        >
          <DrawerHeader>
            {open ? (
              <ArrowBack
                style={{
                  marginLeft: "auto",
                  marginRight: 15,
                  cursor: "pointer",
                }}
                onClick={handleDrawerClose}
              />
            ) : (
              <MenuIcon
                style={{ cursor: "pointer" }}
                onClick={handleDrawerOpen}
              />
            )}
          </DrawerHeader>
          <Divider />
          <NavList />
        </Drawer>
      </Box>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box> */
}
