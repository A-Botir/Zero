import { Link } from "react-router-dom";

const Components = () => {
  const ExternalLink = ({ url, children }) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[16px] text-[#fa541c]"
    >
      {children}
    </a>
  );
  return (
    <div className="container">
      <h2 className="mb-2 text-[24px] font-semibold">MUI Components</h2>
      <ExternalLink url={"https://mui.com/components/"}>
        https://mui.com/components/
      </ExternalLink>
    </div>
  );
};

export default Components;
