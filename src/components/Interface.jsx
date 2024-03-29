import React, { useState } from "react";
import { deepOrange } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Button,
  Box,
  Tab,
  Tabs,
  Tooltip,
  Chip,
  CircularProgress,
  Avatar,
  AvatarGroup,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Rating,
  Slider,
  Alert,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { BorderColor } from "@mui/icons-material";

import Personal from "./Personal";

const theme = createTheme({
  palette: {
    primary: {
      main: deepOrange[600],
    },
  },
});

const Interface = () => {
  const [progress, setProgress] = React.useState(0);
  const [value, setValue] = React.useState("one");
  const [alignment, setAlignment] = React.useState("left");
  const [values, setsecValue] = useState(4);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDelete = () => {};

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
    <section className="mb-20 grid grid-cols-5 gap-12">
      <div className="col-span-2">
        <p className="mb-10 text-[12px] font-bold text-[#919eab]">
          INTERFACE STARTER KIT
        </p>
        <h2 className="mb-6 text-[48px] font-bold">Flexible Components</h2>
        <p className="mb-12 text-[16px] text-[#637381]">
          Pre-set components are easy to customize and use. We collected most
          popular elements. Menu, sliders, buttons, inputs etc. are all here.
          Just dive in!
        </p>
        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              paddingY: "10px",
            }}
          >
            Browse Components
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="component-iconify MuiBox-root css-3o0h5k iconify iconify--carbon"
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
      <div className="col-span-3 rounded-[40px] border border-dashed p-10">
        <div className="flex w-full items-center justify-center gap-6">
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              + &nbsp; Add To Cart
            </Button>
          </ThemeProvider>
          <button className="flex items-center rounded-[24px] bg-[#212B36] px-4 py-2 text-[14px] font-bold text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="component-iconify MuiBox-root css-9uy14h iconify iconify--carbon"
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
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon"
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
        <div className="mt-5 flex items-center gap-12">
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="inherit"
              aria-label="secondary tabs example"
              sx={{
                "& .MuiTab-root": {
                  fontSize: "14px",
                  width: "60px",
                  minWidth: "auto",
                  margin: "0 12px",
                  "&.Mui-selected": {
                    color: "black",
                  },
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "black",
                },
              }}
            >
              <Tab
                sx={{ textTransform: "none", fontWeight: "bold" }}
                value="one"
                label="Angular"
              />
              <Tab
                sx={{ textTransform: "none", fontWeight: "bold" }}
                value="two"
                label="React"
              />
              <Tab
                sx={{ textTransform: "none", fontWeight: "bold" }}
                value="three"
                label="Vue"
              />
            </Tabs>
          </Box>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M26 26H11a2.002 2.002 0 0 1-2-2v-4a2.002 2.002 0 0 1 2-2h15a2.002 2.002 0 0 1 2 2v4a2.002 2.002 0 0 1-2 2m0-6.001L11 20v4h15zM18 14h-7a2.002 2.002 0 0 1-2-2V8a2.002 2.002 0 0 1 2-2h7a2.002 2.002 0 0 1 2 2v4a2.002 2.002 0 0 1-2 2m0-6.001L11 8v4h7zM4 2h2v28H4z"
                ></path>
              </svg>
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M24 18h-7v-4h3a2.003 2.003 0 0 0 2-2V8a2.003 2.003 0 0 0-2-2h-3V2h-2v4h-3a2.003 2.003 0 0 0-2 2v4a2.003 2.003 0 0 0 2 2h3v4H8a2.003 2.003 0 0 0-2 2v4a2.003 2.003 0 0 0 2 2h7v4h2v-4h7a2.003 2.003 0 0 0 2-2v-4a2.003 2.003 0 0 0-2-2M12 8h8v4h-8Zm12 16H8v-4h16Z"
                ></path>
              </svg>
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M4 24v-4a2.002 2.002 0 0 1 2-2h15a2.002 2.002 0 0 1 2 2v4a2.002 2.002 0 0 1-2 2H6a2.002 2.002 0 0 1-2-2m2 0h15v-4l-15-.001zm6-12V8a2.002 2.002 0 0 1 2-2h7a2.002 2.002 0 0 1 2 2v4a2.002 2.002 0 0 1-2 2h-7a2.002 2.002 0 0 1-2-2m2 0h7V8l-7-.001zm14 18h-2V2h2z"
                ></path>
              </svg>
            </ToggleButton>
          </ToggleButtonGroup>
          <Stack direction="row" spacing={1}>
            <Chip
              avatar={
                <Avatar
                  sx={{
                    bgcolor: "#c62828",
                    color: "white",
                  }}
                >
                  P
                </Avatar>
              }
              onDelete={handleDelete}
              label="Pamela"
              sx={{
                bgcolor: "#f58281",
                color: "error.main",
              }}
            />
          </Stack>
        </div>
        <div className="mt-8 flex items-center justify-around">
          <img
            src="https://zone-ui.vercel.app/assets/images/avatar/avatar_5.jpg"
            alt="avatar"
            width={64}
            height={64}
            className="rounded-[50%]"
          />
          <AvatarGroup max={4}>
            <Avatar
              alt="Remy Sharp"
              src="https://zone-ui.vercel.app/assets/images/avatar/avatar_1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://zone-ui.vercel.app/assets/images/avatar/avatar_2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://zone-ui.vercel.app/assets/images/avatar/avatar_3.jpg"
            />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/6.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/7.jpg" />
          </AvatarGroup>
          <Tooltip title="Add" arrow>
            <Button
              color="inherit"
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              Hover me
            </Button>
          </Tooltip>
          <Rating
            name="simple-controlled"
            value={values}
            onChange={(event, newValue) => {
              setsecValue(newValue);
            }}
            icon={<StarIcon sx={{ fill: "#ffc107" }} />}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Always visible"
              defaultValue={80}
              step={1}
              valueLabelDisplay="on"
              color="primary"
            />
            {/* Color озгармади */}
          </Box>
        </div>
        <div className="mt-10 flex justify-center">
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            color="success"
            severity="success"
            sx={{
              bgcolor: "#D8FBDE",
              color: "#0A5554",
            }}
          >
            This is a <b>success</b> alert
            <CloseIcon fontSize="inherit" sx={{ marginLeft: "12px" }} />
          </Alert>
        </div>
        <Personal />
      </div>
    </section>
  );
};

export default Interface;
