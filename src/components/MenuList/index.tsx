"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter, usePathname } from "next/navigation";
export default function SelectedListItem() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Box
      sx={{
        width: { xs: "40%", md: "20%" },
        height: "100%",
        bgcolor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
      }}
    >
      <List component="nav">
        <ListItemButton
          selected={pathname === "/"}
          onClick={(event) => {
            router.push("/");
          }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Index" />
        </ListItemButton>
        <ListItemButton
          selected={pathname === "/welcome-page"}
          onClick={(event) => {
            router.push("/welcome-page");
          }}
        >
          <ListItemIcon>
            <GrainIcon />
          </ListItemIcon>
          <ListItemText primary="Welcome Page" />
        </ListItemButton>
      </List>
      <Divider />
    </Box>
  );
}
