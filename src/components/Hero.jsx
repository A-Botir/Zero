import Button from "@mui/material/Button";
import { blueGrey } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[800],
    },
  },
});

const Hero = () => {
  return (
    <section className="mb-6 grid grid-cols-7 py-14 ">
      <div className="col-span-3">
        <h1 className="font-barlow mb-4 text-[60px] font-bold">
          Create Your Website Today with
          <span className="font-barlow font-bold text-[#fa541c]"> ZONE</span>
        </h1>
        <p className="mb-5 text-[16px] text-[#637381]">
          The ZONE is built on top of MUI, a powerful library that provides
          flexible, customizable, and easy-to-use components.
        </p>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">
            Figma Workspace
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon"
              width="1.25em"
              height="1.25em"
              viewBox="0 0 32 32"
              className="ml-1"
            >
              <path
                fill="#f5f5f5"
                d="M26 28H6a2.003 2.003 0 0 1-2-2V6a2.003 2.003 0 0 1 2-2h10v2H6v20h20V16h2v10a2.003 2.003 0 0 1-2 2"
              ></path>
              <path
                fill="#f5f5f5"
                d="M20 2v2h6.586L18 12.586L19.414 14L28 5.414V12h2V2z"
              ></path>
            </svg>
          </Button>
        </ThemeProvider>
      </div>
      <img
        src="https://zone-ui.vercel.app/assets/images/home/home_hero.png"
        alt="hero img"
        className="absolute right-[-100px] top-[-100px] z-[-3] w-[65%]"
      />
    </section>
  );
};

export default Hero;
