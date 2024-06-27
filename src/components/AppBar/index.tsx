import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThemeButton from "../ThemeButton";
import LocaleButton from "@/components/LocaleButton";

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
          <LocaleButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
