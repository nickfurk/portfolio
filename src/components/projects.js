import React, { Component } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Badge, Button } from "react-bootstrap";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../css/projects.css";
import { GlassMagnifier } from "react-image-magnifiers";
import TreeDemo1 from "../images/treedemo1.png";
import TreeDemo2 from "../images/treedemo2.png";
import CapWiseDemo from "../images/capwise-demo.png";
import FlareIcon from "@material-ui/icons/Flare";

export default function SimpleAccordion() {
  return (
    <React.Fragment>
      <Element name="projects">
        <div className="project-section">
          <br></br>
          <br></br>
          <br></br>

          <h1>
            <Badge bg="secondary">Projects</Badge>
            <FlareIcon />
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
              <div className="task-description">
                <li>
                  Web scrapper crawls a Hong Kong governemnt website for IT
                  related jobs. Script stored in a docker image{" "}
                </li>
                <li>
                  Docker image launched on AWS ECS using Fargate and crawled
                  data is stored in AWS RDS (MySql)
                </li>
                <li>
                  Set daily crawling with schedule tasks (cron) on AWS ECS
                </li>
                <li>
                  Tech stack: Python, Beautifulsoup Framework, docker, AWS (ECR,
                  ECS, Fargate)
                </li>
              </div>
            </AccordionDetails>
            <div>
              <Button variant="secondary" className="source-code-button">
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
              <div className="task-description">
                <li>
                  Used scrum agile methodology for the development of a mobile
                  application which enables users to find locations to plant
                  trees and record data about the tree
                </li>
                <li>
                  Built the add tree data, update tree data, and delete tree
                  record. This process reads, writes, and delete data in
                  Firestore
                </li>
                <li>
                  Tech stack: React, JavaScript, CSS, Bootstrap, Firebase,
                  Heroku
                </li>
              </div>
            </AccordionDetails>

            <div className="demo-images">
              <GlassMagnifier
                imageSrc={TreeDemo1}
                magnifierSize="50%"
                square="true"
                imageAlt="Tree-Bien-Demo-1"
              />
            </div>

            <div className="demo-images">
              <GlassMagnifier
                imageSrc={TreeDemo2}
                magnifierSize="50%"
                square="true"
                imageAlt="Tree-Bien-Demo-2"
              />
            </div>

            <div>
              <span>
                <Button variant="secondary" className="source-code-button">
                  Source code
                </Button>
              </span>
              <span>
                <Button variant="secondary" className="view-site">
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
              <h6>CapWise (Occupancy Counter)</h6>
            </AccordionSummary>
            <AccordionDetails>
              <div className="task-description">
                <li>
                  Used agile sprint for the development of an application that
                  enables users tokeep track of the number of people in the
                  store, while using the countnumber for marketing insight
                </li>
                <li>
                  Built the marketing insight feature which enables the user to
                  see how theirpromotion has affected foot traffic by displaying
                  change percentages, whilekeeping a tab on all promotions using
                  filter
                </li>
                <li>Tech stack: JavaScript, HTML/CSS, Bootstrap, Firebase</li>
              </div>
            </AccordionDetails>

            <div className="demo-images">
              <GlassMagnifier
                imageSrc={CapWiseDemo}
                magnifierSize="50%"
                square="true"
                imageAlt="Tree-Bien-Demo-2"
              />
            </div>

            <div>
              <Button variant="secondary" className="source-code-button">
                Source code
              </Button>
              <Button variant="secondary" className="view-site">
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
              <Button variant="secondary" className="source-code-button">
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
              <Button variant="secondary" className="source-code-button">
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
              <Button variant="secondary" className="source-code-button">
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
              <Button variant="secondary" className="source-code-button">
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
              <Button variant="secondary" className="source-code-button">
                Source code
              </Button>
            </div>
          </Accordion>
        </div>
      </Element>
    </React.Fragment>
  );
}
