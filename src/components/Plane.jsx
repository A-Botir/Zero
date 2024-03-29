import Button from "@mui/material/Button";
import { CheckSvg, UncheckSvg } from "../components/Svg";

const Plane = () => {
  const TargetLink = ({ url, children }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
  return (
    <section className="pb-20 pt-[120px]">
      <div className="mb-20">
        <p className="text-center font-bold uppercase text-[#919EAB]">
          pricing plans
        </p>
        <h2 className="my-6 text-center text-[48px] font-bold">
          The Right Plan <br /> For Your Business
        </h2>
        <p className="text-center text-[16px] text-[#637381]">
          Choose the perfect plan for your needs. Always flexible to grow
        </p>
      </div>
      <div className="flex w-full items-center justify-center gap-4">
        <div className="shadow-card1 w-[30%] rounded-lg p-10">
          <dir className="mb-10 flex justify-between">
            <p className="font-barlow text-[20px] font-semibold">STANDARD</p>
            <div className="flex items-start">
              <span className="text-[24px] font-semibold">$</span>
              <span className="text-[32px] font-bold">59</span>
            </div>
          </dir>
          <div className="mb-10 flex gap-3">
            <img
              src="https://zone-ui.vercel.app/assets/icons/platforms/ic_js.svg"
              alt="pl icon"
            />
          </div>
          <ul className="mb-10 flex flex-col gap-5">
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4">One end products</span>
            </li>
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4">12 months updates</span>
            </li>
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4">6 months of support</span>
            </li>
            <hr className="border border-dashed border-[#919eab33]" />
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4">JavaScript version</span>
            </li>
            <li className="flex items-center ">
              <UncheckSvg />
              <span className="ml-4 text-[#919eab]">TypeScript version</span>
            </li>
            <li className="flex items-center ">
              <UncheckSvg />
              <span className="ml-4 text-[#919eab]">Design resources</span>
            </li>
            <li className="flex items-center ">
              <UncheckSvg />
              <span className="ml-4 text-[#919eab]">
                Commercial applications
              </span>
            </li>
          </ul>
          <div className="mb-6">
            <TargetLink url={"https://mui.com/store/items/zone-landing-page/"}>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  width: "100%",
                  borderColor: "#919eab52",
                  textTransform: "none",
                  fontWeight: "700",
                  paddingY: "8px",
                }}
              >
                Choose Package
              </Button>
            </TargetLink>
          </div>
          <TargetLink url={"https://mui.com/store/license/#i-standard-license"}>
            <p className="#637381 text-right">Read license {"  >"}</p>
          </TargetLink>
        </div>
        <div className="shadow-card2 w-[30%] rounded-lg p-10">
          <dir className="mb-10 flex justify-between">
            <p className="font-barlow text-[20px] font-semibold">PLUS</p>
            <div className="flex items-start">
              <span className="text-[24px] font-semibold">$</span>
              <span className="text-[32px] font-bold">99</span>
            </div>
          </dir>
          <div className="mb-10 flex gap-3">
            <img
              src="https://zone-ui.vercel.app/assets/icons/platforms/ic_js.svg"
              alt="pl icon"
            />
            <img
              src="https://zone-ui.vercel.app/assets/icons/platforms/ic_ts.svg"
              alt="fm icon"
            />
            <img
              src="https://zone-ui.vercel.app/assets/icons/platforms/ic_figma.svg"
              alt="figma icon"
            />
          </div>
          <ul className="mb-10 flex flex-col gap-5">
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4">One end products</span>
            </li>
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4">12 months updates</span>
            </li>
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4">6 months of support</span>
            </li>
            <hr className="border border-dashed border-[#919eab33]" />
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4">JavaScript version</span>
            </li>
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4 text-[#919eab]">TypeScript version</span>
            </li>
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4 text-[#919eab]">Design resources</span>
            </li>
            <li className="flex items-center ">
              <UncheckSvg />
              <span className="ml-4 text-[#919eab]">
                Commercial applications
              </span>
            </li>
          </ul>
          <div className="mb-6">
            <TargetLink url={"https://mui.com/store/items/zone-landing-page/"}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                  borderColor: "#919eab52",
                  textTransform: "none",
                  fontWeight: "700",
                  paddingY: "8px",
                }}
              >
                Choose Package
              </Button>
            </TargetLink>
          </div>
          <TargetLink url={"https://mui.com/store/license/#i-standard-license"}>
            <p className="#637381 text-right">Read license {"  >"}</p>
          </TargetLink>
        </div>
        <div className="shadow-card1 w-[30%] rounded-lg p-10">
          <dir className="mb-10 flex justify-between">
            <p className="font-barlow text-[20px] font-semibold">EXTENDED</p>
            <div className="flex items-start">
              <span className="text-[24px] font-semibold">$</span>
              <span className="text-[32px] font-bold">249</span>
            </div>
          </dir>
          <div className="mb-10 flex gap-3">
            <img
              src="https://zone-ui.vercel.app/assets/icons/platforms/ic_js.svg"
              alt="pl icon"
            />
            <img
              src="https://zone-ui.vercel.app/assets/icons/platforms/ic_ts.svg"
              alt="fm icon"
            />
            <img
              src="https://zone-ui.vercel.app/assets/icons/platforms/ic_figma.svg"
              alt="figma icon"
            />
          </div>
          <ul className="mb-10 flex flex-col gap-5">
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4">One end products</span>
            </li>
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4">12 months updates</span>
            </li>
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4">6 months of support</span>
            </li>
            <hr className="border border-dashed border-[#919eab33]" />
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4">JavaScript version</span>
            </li>
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4 text-[#919eab]">TypeScript version</span>
            </li>
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4 text-[#919eab]">Design resources</span>
            </li>
            <li className="flex items-center ">
              <CheckSvg />
              <span className="ml-4 text-[#919eab]">
                Commercial applications
              </span>
            </li>
          </ul>
          <div className="mb-6">
            <TargetLink url={"https://mui.com/store/items/zone-landing-page/"}>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  width: "100%",
                  borderColor: "#919eab52",
                  textTransform: "none",
                  fontWeight: "700",
                  paddingY: "8px",
                }}
              >
                Choose Package
              </Button>
            </TargetLink>
          </div>
          <TargetLink url={"https://mui.com/store/license/#i-standard-license"}>
            <p className="#637381 text-right">Read license {"  >"}</p>
          </TargetLink>
        </div>
      </div>
    </section>
  );
};

export default Plane;
