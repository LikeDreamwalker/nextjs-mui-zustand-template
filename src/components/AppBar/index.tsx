import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThemeButton from "../ThemeButton";
import { getI18nString } from "@/library/api";

type AppBarProps = {
  title?: string;
};

export default async function CustomAppBar({ title = "AppBar" }: AppBarProps) {
  const res = await getI18nString(["common.app-bar.title"]);
  const renderTitle = res["common.app-bar.title"];
  return (
    <Box sx={{ flex: "0 0 auto" }}>
      <AppBar position="fixed" sx={{ zIndex: 10 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {renderTitle || title}
          </Typography>
          <ThemeButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
