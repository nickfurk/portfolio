import React, { Component } from "react";
import { Badge, Button } from "react-bootstrap";

// import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../css/projects.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "95%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

export default function SimpleAccordion() {
  //   const classes = useStyles();

  return (
    <div className="project-section">
      <br></br>
      <br></br>
      <h1>
        <Badge bg="secondary">Projects</Badge>
      </h1>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h6>Job Web Scrapper</h6>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
          </div>
        </AccordionDetails>
        <div>
          <Button variant="outline-dark" className="source-code-button">
            Source code
          </Button>
        </div>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h6>Tree Bien (React Web App)</h6>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
          </div>
        </AccordionDetails>
        <div>
          <span>
            <Button variant="outline-dark" className="source-code-button">
              Source code
            </Button>
          </span>
          <span>
            <Button variant="outline-dark" className="view-site">
              View site
            </Button>
          </span>
        </div>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h6>CapWise (Occupancy Counter Web App)</h6>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
          </div>
        </AccordionDetails>
        <div>
          <Button variant="outline-dark" className="source-code-button">
            Source code
          </Button>
          <Button variant="outline-dark" className="view-site">
            View site
          </Button>
        </div>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h6>Library Sorter</h6>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
          </div>
        </AccordionDetails>
        <div>
          <Button variant="outline-dark" className="source-code-button">
            Source code
          </Button>
        </div>
      </Accordion>
    </div>
  );
}
