import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

const Accardion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className="my-20">
      <h2 className="text-center font-barlow text-[48px] font-bold">
        Frequently Asked Questions
      </h2>
      <div className="my-20 w-full">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>What's in the product packages?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingX: "30px" }}>
            <Typography>
              Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere
              vulputate arcu. Donec mi odio, faucibus at, scelerisque quis,
              convallis in,
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>How can I upgrade my product plan?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingX: "30px" }}>
            <Typography>
              Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere
              vulputate arcu. Donec mi odio, faucibus at, scelerisque quis,
              convallis in,
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              Are design assets (Figma, Sketch, Adobe XD) included?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingX: "30px" }}>
            <Typography>
              Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere
              vulputate arcu. Donec mi odio, faucibus at, scelerisque quis,
              convallis in,
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Does this product support TypeScript?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingX: "30px" }}>
            <Typography>
              Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere
              vulputate arcu. Donec mi odio, faucibus at, scelerisque quis,
              convallis in,
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              Can I use this template in commercial projects like a SaaS?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingX: "30px" }}>
            <Typography>
              Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere
              vulputate arcu. Donec mi odio, faucibus at, scelerisque quis,
              convallis in,
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>How can I request support?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingX: "30px" }}>
            <Typography>
              Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere
              vulputate arcu. Donec mi odio, faucibus at, scelerisque quis,
              convallis in,
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
};

export default Accardion;
