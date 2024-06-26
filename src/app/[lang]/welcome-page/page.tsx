"use client";
import { Box, Card, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useCommonStore } from "@/providers/common-store-provider";
import { useEffect, useState } from "react";
import { Locale } from "@/library/intl";
// import { getI18nString } from "@/library/api";
interface Props {
  params: {
    lang: Locale;
  };
}

export default function WelcomePage({ params: { lang: locale } }: Props) {
  const { generateHelloString } = useCommonStore((store) => ({
    generateHelloString: store.generateHelloString,
    helloName: store.helloName,
    editHelloName: store.editHelloName,
  }));
  const [helloString, setString] = useState("And welcome to the template!");
  // const [i18nStrings, setI18nStrings] = useState({});

  // const targetI18nStrings = {

  // }
  // const getI18nStringFunc = async () => {
  //   const res = await getI18nString({ locale, texts: ["hello"] });
  //   setI18nStrings(res);
  // };

  // useEffect(() => {
  //   getI18nStringFunc();
  //   // Assuming you want this to run when `locale` changes
  // }, [locale]);
  return (
    <Box
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
        <Grid
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="standard-password-input"
            label="Say something"
            variant="standard"
            value={helloString}
            onChange={(event) => {
              setString(event.target.value);
            }}
            sx={{
              width: "60%",
            }}
          />
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Card elevation={0} sx={{ width: "60%" }}>
            <Typography variant="h4">
              {generateHelloString(helloString)}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
