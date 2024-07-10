"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThemeButton from "@/components/ThemeButton";
import LocaleButton from "@/components/LocaleButton";
import MenuList from "@/components/MenuList";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type AppBarProps = {
  title?: string;
};

export default function CustomAppBar({ title = "AppBar" }: AppBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { xs: "100%", sm: `calc(100% - 20vw)` },
          ml: { xs: 0, sm: `calc(100% - 20vw)` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          <ThemeButton />
          <LocaleButton />
        </Toolbar>
      </AppBar>
      <Box sx={{ width: { xs: 0, sm: "20vw" }, flexShrink: { sm: 0 } }}>
        {/* For Mobile */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            // Better open performance on mobile.
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "80vw",
            },
          }}
        >
          <MenuList onClickItem={handleDrawerClose}></MenuList>
        </Drawer>
        {/* For landscape phones and normal desktops */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "20vw",
            },
          }}
          open
        >
          <MenuList></MenuList>
        </Drawer>
      </Box>
    </Box>
  );
}
