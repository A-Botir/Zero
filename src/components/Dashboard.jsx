import React from "react";
import Button from "@mui/material/Button";

const Dashboard = () => {
  const TargetLink = ({ url, children }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
  return (
    <section className=" mb-[120px] mt-20">
      <div className="mx-auto mb-20 flex w-[60%] flex-col justify-center rounded-[24px] border border-dashed border-[#919eab52] p-16">
        <h2 className="text-center font-barlow text-[32px] font-bold">
          Still Have Questions?
        </h2>
        <p className="mb-10 mt-6 text-center text-[16px] text-[#637381]">
          Please describe your case to receive the most accurate advice.
        </p>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginX: "auto",
            textTransform: "none",
            fontWeight: "700",
            paddingY: "8px",
            borderRadius: "8px",
          }}
        >
          Contact Us
        </Button>
      </div>
      <div className="relative rounded-[24px] bg-[#F4F6F8] p-20">
        <div className="mb-20">
          <p className="font-bold uppercase text-[#919EAB]">
            Perfect combination
          </p>
          <h2 className="my-6 text-[32px] font-bold">
            Looking For a <br /> Dashboard Template?
          </h2>
          <p className="mb-10 text-[16px] text-[#637381]">
            Minimal UI Kit is a professional dashboard used <br /> by many of
            our clients.
          </p>
          <div className="mb-6">
            <TargetLink url={"https://mui.com/store/items/minimal-dashboard/"}>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  borderColor: "#919eab52",
                  textTransform: "none",
                  fontWeight: "700",
                  paddingY: "8px",
                }}
              >
                Visit Minimal Dashboard{"   "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="component-iconify MuiBox-root css-3o0h5k iconify iconify--carbon"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
                  ></path>
                </svg>
              </Button>
            </TargetLink>
          </div>
        </div>
        <img
          src="https://zone-ui.vercel.app/assets/images/home/minimal_dashboard.png"
          alt="dashboard img"
          className="absolute right-[-8rem] top-[-6rem] w-[70%]"
        />
      </div>
    </section>
  );
};

export default Dashboard;
