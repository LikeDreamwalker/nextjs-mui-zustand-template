"use client";
import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { fullRenderLocales } from "@/i18n/routing";
import { useRouter, usePathname } from "@/i18n/routing";
const LocaleButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (lang: string) => {
    router.replace(pathname, { locale: lang });
    handleClose();
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <LanguageIcon />
      </IconButton>
      <Menu
        id="locale-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {fullRenderLocales.map((locale) => (
          <MenuItem key={locale.key} onClick={() => handleChange(locale.key)}>
            {locale.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LocaleButton;
