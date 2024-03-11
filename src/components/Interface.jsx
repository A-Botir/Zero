import { deepOrange } from "@mui/material/colors";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: deepOrange[600],
    },
  },
});

const Interface = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10,
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="grid grid-cols-7 gap-10">
      <div className="col-span-3">
        <p className="mb-10 text-[12px] font-bold text-[#919eab]">
          INTERFACE STARTER KIT
        </p>
        <h2 className="mb-6 text-[48px] font-bold">Flexible Components</h2>
        <p className="mb-6 text-[16px] text-[#637381]">
          Pre-set components are easy to customize and use. We collected most
          popular elements. Menu, sliders, buttons, inputs etc. are all here.
          Just dive in!
        </p>
        <ThemeProvider theme={theme}>
          <Button variant="outlined" color="primary">
            Browse Components
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="component-iconify MuiBox-root css-3o0h5k iconify iconify--carbon"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
              ></path>
            </svg>
          </Button>
        </ThemeProvider>
      </div>
      <div className="col-span-4 rounded-[40px] border border-dashed p-10">
        <div className="flex w-full items-center justify-center gap-5">
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              + &nbsp; Add To Cart
            </Button>
          </ThemeProvider>
          <button className="flex items-center rounded-[24px] bg-[#212B36] px-4 py-2 text-[14px] font-bold text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="component-iconify MuiBox-root css-9uy14h iconify iconify--carbon"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="m11 18l1.41 1.41L15 16.83V29h2V16.83l2.59 2.58L21 18l-5-5z"
              ></path>
              <path
                fill="white"
                d="M23.5 22H23v-2h.5a4.5 4.5 0 0 0 .36-9H23l-.1-.82a7 7 0 0 0-13.88 0L9 11h-.86a4.5 4.5 0 0 0 .36 9H9v2h-.5A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22"
              ></path>
            </svg>
            &nbsp; Upload
          </button>
          <button className="rounded-[50%] bg-[#00B8D9] p-4 text-[14px] font-bold text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 32 32"
            >
              <path fill="white" d="M13 15v8l7-4z"></path>
              <path
                fill="white"
                d="M26 28H6a2.002 2.002 0 0 1-2-2V12a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v14a2.002 2.002 0 0 1-2 2M6 12v14h20V12zm0-6h20v2H6zm2-4h16v2H8z"
              ></path>
            </svg>
          </button>
          <Box sx={{ display: "flex" }}>
            <CircularProgress variant="determinate" value={progress} />
          </Box>
        </div>
      </div>
    </section>
  );
};

export default Interface;
