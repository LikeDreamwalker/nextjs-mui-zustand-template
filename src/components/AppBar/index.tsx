import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeButton from "../ThemeButton";
import zIndex from "@mui/material/styles/zIndex";

type AppBarProps = {
  title?: string;
};

export default function CustomAppBar({ title = "AppBar" }: AppBarProps) {
  return (
    <Box sx={{ flex: "0 0 auto" }}>
      <AppBar position="fixed" sx={{ zIndex: 10 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <ThemeButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
