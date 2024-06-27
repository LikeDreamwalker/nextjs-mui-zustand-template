"use client";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useCommonStore } from "@/providers/common-store-provider";
import { useTranslations } from "next-intl";
export default function Home() {
  const { helloName, helloOptions, editHelloName, editHelloOptions } =
    useCommonStore((store) => ({
      helloName: store.helloName,
      helloOptions: store.helloOptions,
      editHelloName: store.editHelloName,
      editHelloOptions: store.editHelloOptions,
    }));
  const handleChange = ({ name, value }: { name: string; value: any }) => {
    editHelloOptions({
      ...helloOptions,
      [name]: value,
    });
  };
  const t = useTranslations("Index");
  console.log(t("title"));
  return (
    <Box
      className="Home"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
        flex: "1 1 100%",
        heigth: "100%",
        padding: 4,
      }}
    >
      <Grid container>
        <Grid xs={12}>
          <TextField
            id="standard-password-input"
            label="Your name"
            variant="standard"
            value={helloName}
            onChange={(event) => {
              editHelloName(event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid xs={12} sx={{ mt: 2 }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={helloOptions.haveAGoodDay}
                  onChange={() => {
                    handleChange({
                      name: "haveAGoodDay",
                      value: !helloOptions.haveAGoodDay,
                    });
                  }}
                />
              }
              label="Have a good day!"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={helloOptions.haveAGoodNight}
                  onChange={() => {
                    handleChange({
                      name: "haveAGoodNight",
                      value: !helloOptions.haveAGoodNight,
                    });
                  }}
                />
              }
              label="Have a good night!"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  );
}
