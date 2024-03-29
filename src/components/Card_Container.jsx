import React from "react";

const Card_Container = () => {
  return (
    <section className="mb-[120px] mt-20 grid grid-cols-7 gap-x-20">
      <div className="col-span-3">
        <p className="text-[12px] font-bold text-[#919EAB]">
          FEATURE HIGHLIGHTS
        </p>
        <h2 className="my-6 text-[48px] font-bold">Have Everything You Need</h2>
        <p className="text-[16px] text-[#637381]">
          Let's see what makes our theme super powerful and user-friendly!
        </p>
      </div>
      <div className="col-span-4  grid grid-cols-3 gap-x-6 gap-y-12">
        <div className="flex w-[200px] flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-x3wokz iconify iconify--carbon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4z"
            ></path>
            <path
              fill="currentColor"
              d="M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6ZM18 28h-4v-4h4Z"
            ></path>
          </svg>
          <p className="mt-4 text-center font-semibold">5 Prebuilt Websites</p>
        </div>
        <div className="flex w-[200px] flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-x3wokz iconify iconify--carbon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path
              d="M8 30H2a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM2 14v14h6V14z"
              fill="currentColor"
            ></path>
            <path
              d="M20 30h-6a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zm-6-16v14h6V14z"
              fill="currentColor"
            ></path>
            <path
              d="M27 21h-2V9h-8V7h8a2 2 0 0 1 2 2z"
              fill="currentColor"
            ></path>
            <path
              d="M32 16h-2V4h-8V2h8a2 2 0 0 1 2 2z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="mt-4 text-center font-semibold">60+ Demo Page</p>
        </div>
        <div className="flex w-[200px] flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-x3wokz iconify iconify--carbon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3M2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3"
            ></path>
          </svg>
          <p className="mt-4 text-center font-semibold">Easy to Customize</p>
        </div>
        <div className="flex w-[200px] flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-x3wokz iconify iconify--carbon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M26 4H6a2.003 2.003 0 0 0-2 2v20a2.003 2.003 0 0 0 2 2h20a2.003 2.003 0 0 0 2-2V6a2.003 2.003 0 0 0-2-2M6 26L26 6v20Z"
            ></path>
          </svg>
          <p className="mt-4 text-center font-semibold">Color Presets</p>
        </div>
        <div className="flex w-[200px] flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-x3wokz iconify iconify--carbon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M13.503 5.414a15.076 15.076 0 0 0 11.593 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3"
            ></path>
          </svg>
          <p className="mt-4 text-center font-semibold">Dark Mode</p>
        </div>
        <div className="flex w-[200px] flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-x3wokz iconify iconify--carbon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M23 23a7 7 0 1 1 7-7a7.008 7.008 0 0 1-7 7m0-12a5 5 0 1 0 5 5a5.006 5.006 0 0 0-5-5"
            ></path>
            <circle cx="9" cy="16" r="7" fill="currentColor"></circle>
          </svg>
          <p className="mt-4 text-center font-semibold">Awesome Animation</p>
        </div>
        <div className="flex w-[200px] flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-x3wokz iconify iconify--carbon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M25 12h-5v2h5a1 1 0 0 1 1 1v2h-4a3.003 3.003 0 0 0-3 3v1a3.003 3.003 0 0 0 3 3h6v-9a3.003 3.003 0 0 0-3-3m-3 10a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h4v3zm-6 2h2L12 7h-2L4 24h2l1.694-5h6.613zm-7.629-7l2.497-7.371h.266L13.63 17z"
            ></path>
          </svg>
          <p className="mt-4 text-center font-semibold">Google Fonts</p>
        </div>
        <div className="flex w-[200px] flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-x3wokz iconify iconify--ph"
            width="32px"
            height="32px"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M184 96a40 40 0 0 0-24-72H88a40 40 0 0 0-24 72a40 40 0 0 0 1.37 65A44 44 0 1 0 136 196v-36a40 40 0 1 0 48-64m0-32a24 24 0 0 1-24 24h-24V40h24a24 24 0 0 1 24 24M64 64a24 24 0 0 1 24-24h32v48H88a24 24 0 0 1-24-24m24 88a24 24 0 0 1 0-48h32v48zm32 44a28 28 0 1 1-28-28h28Zm40-44a24 24 0 1 1 24-24a24 24 0 0 1-24 24"
            ></path>
          </svg>
          <p className="mt-4 text-center font-semibold">Figma Design</p>
        </div>
        <div className="flex w-[200px] flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-x3wokz iconify iconify--carbon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M10 30H4a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M4 16v12h6V16Z"
            ></path>
            <path
              fill="currentColor"
              d="M28 4H6a2 2 0 0 0-2 2v6h2V6h22v14H14v2h2v4h-2v2h9v-2h-5v-4h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
            ></path>
          </svg>
          <p className="mt-4 text-center font-semibold">Fully Responsive</p>
        </div>
        <div className="flex w-[200px] flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-x3wokz iconify iconify--carbon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M26 6V2H2v10h9v18h19V6ZM4 10V4h20v2H11v4Zm24 18H13V8h15Z"
            ></path>
            <path
              fill="currentColor"
              d="M15 11h2v2h-2zm4 0h7v2h-7zm-4 6h2v2h-2zm4 0h7v2h-7zm-4 6h2v2h-2zm4 0h7v2h-7z"
            ></path>
          </svg>
          <p className="mt-4 text-center font-semibold">Mega Menu</p>
        </div>
        <div className="flex w-[200px] flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-x3wokz iconify iconify--carbon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="m18.83 26l2.58-2.58L20 22l-4 4l4 4l1.42-1.41zm8.34 0l-2.58 2.58L26 30l4-4l-4-4l-1.42 1.41z"
            ></path>
            <path
              fill="currentColor"
              d="M14 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v6h2v-8a.91.91 0 0 0-.3-.7l-7-7A.909.909 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h6Zm4-23.6l5.6 5.6H18Z"
            ></path>
          </svg>
          <p className="mt-4 text-center font-semibold">Clean Markup</p>
        </div>
        <div className="flex w-[200px] flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-x3wokz iconify iconify--carbon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="m27 25.586l-2-2V21h-2v3.414L25.586 27z"
            ></path>
            <path
              fill="currentColor"
              d="M24 31a7 7 0 1 1 7-7a7.008 7.008 0 0 1-7 7m0-12a5 5 0 1 0 5 5a5.006 5.006 0 0 0-5-5m-8 9A12.013 12.013 0 0 1 4 16H2a14.016 14.016 0 0 0 14 14zM12 8H7.078A11.984 11.984 0 0 1 28 16h2A13.978 13.978 0 0 0 6 6.234V2H4v8h8z"
            ></path>
          </svg>
          <p className="mt-4 text-center font-semibold">Free Updates</p>
        </div>
        <div className="flex w-[200px] flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-x3wokz iconify iconify--carbon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M25 10h-.06a9 9 0 0 0-17.88 0H7a5 5 0 0 0 0 10h2v-9a7 7 0 0 1 14 0v10a4 4 0 0 1-3.17 3.91a4 4 0 1 0 .05 2A6 6 0 0 0 25 21v-1a5 5 0 0 0 0-10M4 15a3 3 0 0 1 3-3v6a3 3 0 0 1-3-3m12 13a2 2 0 1 1 2-2a2 2 0 0 1-2 2m9-10v-6a3 3 0 0 1 0 6"
            ></path>
          </svg>
          <p className="mt-4 text-center font-semibold">Fast Support</p>
        </div>
        <div className="flex w-[200px] flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-x3wokz iconify iconify--carbon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M19 10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7z"
            ></path>
            <path
              fill="currentColor"
              d="M28 5H4a2.002 2.002 0 0 0-2 2v18a2.002 2.002 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V7a2.002 2.002 0 0 0-2-2M4 7h11v18H4Zm13 18V7h11l.002 18Z"
            ></path>
          </svg>
          <p className="mt-4 text-center font-semibold">Well Documented</p>
        </div>
      </div>
    </section>
  );
};

export default Card_Container;
