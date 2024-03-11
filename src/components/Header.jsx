import { NavLink, useLocation, Link } from "react-router-dom";
import { useState } from "react";
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

const Header = () => {
  const location = useLocation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const TargetLink = ({ url, children }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

  return (
    <header className="fixed top-0 w-full bg-[#ffffffcc] py-3 pr-[20%]">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-32">
          <NavLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg "
              width="75px"
              height="20px"
              fill="none"
              viewBox="0 0 1080 288"
              className="inline"
            >
              <ellipse
                cx="996"
                cy="204"
                fill="#FA541C"
                rx="60"
                ry="60"
              ></ellipse>
              <path
                fill="currentColor"
                d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"
              ></path>
            </svg>
            <sup className="rounded-xl bg-[#00b8d929] p-1 font-semibold text-[#006C9C]">
              v2.4.0
            </sup>
          </NavLink>

          <ul className="flex justify-center gap-4 p-[6px]">
            <li
              className={`p-2 hover:list-disc ${
                location.pathname === "/"
                  ? "ml-1 list-disc font-medium"
                  : "text-[#212b36]"
              } cursor-pointer text-[15px]  hover:font-medium`}
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className={`p-2 hover:list-disc ${
                location.pathname === "/components"
                  ? "ml-1 list-disc font-medium"
                  : "text-[#212b36]"
              } cursor-pointer text-[15px]  hover:font-medium`}
            >
              <NavLink to="/components">Components</NavLink>
            </li>
            <li
              className={`p-2 hover:list-disc ${
                location.pathname === "/pages"
                  ? "ml-1 list-disc font-medium"
                  : "text-[#212b36]"
              } cursor-pointer text-[15px]  hover:font-medium`}
            >
              <NavLink to="/pages">Pages</NavLink>
            </li>
            <li className="ml-1 cursor-pointer p-2 text-[15px] text-[#212b36] hover:list-disc  hover:font-medium">
              <TargetLink url={"https://zone-docs.vercel.app/"}>
                Docs
              </TargetLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex w-[296px] justify-end gap-[14px]">
            {isSearchVisible && (
              <input
                type="search"
                className="rounded-xl border border-[#1F1F1F] px-3 py-[7px] outline-none"
                placeholder="Search..."
                id="search"
              />
            )}
            <button onClick={toggleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon"
                width="1.25em"
                height="1.25em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"
                ></path>
              </svg>
            </button>
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon"
              width="1.25em"
              height="1.25em"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M27 16.76v-1.53l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1a2 2 0 0 0-.64.1l-2.43.82a11.35 11.35 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.48 11.48 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.53l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1a2 2 0 0 0 .64-.1l2.43-.82a11.35 11.35 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.48 11.48 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1a2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51ZM25.21 24l-3.43-1.16a8.86 8.86 0 0 1-2.71 1.57L18.36 28h-4.72l-.71-3.55a9.36 9.36 0 0 1-2.7-1.57L6.79 24l-2.36-4l2.72-2.4a8.9 8.9 0 0 1 0-3.13L4.43 12l2.36-4l3.43 1.16a8.86 8.86 0 0 1 2.71-1.57L13.64 4h4.72l.71 3.55a9.36 9.36 0 0 1 2.7 1.57L25.21 8l2.36 4l-2.72 2.4a8.9 8.9 0 0 1 0 3.13L27.57 20Z"
              ></path>
              <path
                fill="currentColor"
                d="M16 22a6 6 0 1 1 6-6a5.94 5.94 0 0 1-6 6m0-10a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4"
              ></path>
            </svg>
          </button>
          <TargetLink url={"https://mui.com/store/items/zone-landing-page/"}>
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="primary">
                Buy Now
              </Button>
            </ThemeProvider>
          </TargetLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
