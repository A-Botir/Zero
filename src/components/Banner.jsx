import React from "react";
import { Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: deepOrange[600],
    },
  },
});

const Banner = () => {
  const TargetLink = ({ url, children }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
  return (
    <section className="bg-gradient-to-center flex w-full flex-col items-center bg-contain py-[280px]">
      <h2 className=" text-center font-barlow text-[64px] font-bold text-white opacity-[0.48]">
        Start Now
      </h2>
      <h2 className="mb-16 text-center font-barlow text-[64px] font-bold text-white">
        Create Your <br /> Website Today
      </h2>
      <TargetLink url={"https://mui.com/store/items/zone-landing-page/"}>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              paddingY: "10px",
              textTransform: "none",
              borderRadius: "12px",
            }}
          >
            Purchase Now
          </Button>
        </ThemeProvider>
      </TargetLink>
    </section>
  );
};

export default Banner;
