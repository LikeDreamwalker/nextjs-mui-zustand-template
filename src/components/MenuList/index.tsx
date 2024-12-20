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
import { useRouter, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
type Props = {
  sx?: object;
  onClickItem?: () => void;
};
export default function SelectedListItem({ sx, onClickItem }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Common.menuList");
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
        ...sx,
      }}
    >
      <List component="nav">
        <ListItemButton
          selected={pathname === "/"}
          onClick={(event) => {
            router.push("/");
            if (onClickItem) {
              onClickItem();
            }
          }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={t("Index")} />
        </ListItemButton>
        <ListItemButton
          selected={pathname === "/welcome-page"}
          onClick={(event) => {
            router.push("/welcome-page");
            if (onClickItem) {
              onClickItem();
            }
          }}
        >
          <ListItemIcon>
            <GrainIcon />
          </ListItemIcon>
          <ListItemText primary={t("WelcomePage")} />
        </ListItemButton>
      </List>
      <Divider />
    </Box>
  );
}
