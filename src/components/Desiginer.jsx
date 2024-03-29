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

const Desiginer = () => {
  const TargetLink = ({ url, children }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
  return (
    <section className="bg-gradient-to-bottom flex w-full flex-col items-center bg-contain py-[120px]">
      <p className="font0bold text-center text-[12px] uppercase text-white opacity-[0.48]">
        Professional Kit
      </p>
      <h2 className="mb-10 mt-4 text-[48px] font-bold text-white">
        For Designer
      </h2>
      <TargetLink
        url={
          "https://www.figma.com/file/Zam9QBLhV4pZf5xtNs0Lf8/%5BPreview%5D-Zone_Web.v2.3.0?type=design&node-id=59%3A680507&mode=design&t=GCVeJci5zfUu5WCy-1"
        }
      >
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              paddingY: "8px",
            }}
          >
            Figma Workspace &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="M26 28H6a2.003 2.003 0 0 1-2-2V6a2.003 2.003 0 0 1 2-2h10v2H6v20h20V16h2v10a2.003 2.003 0 0 1-2 2"
              ></path>
              <path
                fill="white"
                d="M20 2v2h6.586L18 12.586L19.414 14L28 5.414V12h2V2z"
              ></path>
            </svg>
          </Button>
        </ThemeProvider>
      </TargetLink>
    </section>
  );
};

export default Desiginer;
