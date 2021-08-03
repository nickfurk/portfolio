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
import FlareIcon from "@material-ui/icons/Flare";
import "../css/projects.css";
import { GlassMagnifier } from "react-image-magnifiers";
import TreeDemo1 from "../images/treedemo1.png";
import TreeDemo2 from "../images/treedemo2.png";
import CapWiseDemo from "../images/capwise-demo.png";
import BookManager1 from "../images/bookmanager1.png";
import BookManager2 from "../images/bookmanager2.png";
import JobScrapperArchitecture from "../images/jobwebscrapper-architecture.png";
import JobScrapperRDS from "../images/webscrapper-rds.png";

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

          {/* --- JOB WEB SCRAPPER --- */}
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
                <li className="tech-stack-line">
                  Tech stack: Python, Beautifulsoup Framework, docker, AWS (ECR,
                  ECS, Fargate)
                </li>
              </div>
            </AccordionDetails>
            <br></br>
            <div className="jobwebscrapper-architecture">
              <p>Architecture:</p>
              <GlassMagnifier
                imageSrc={JobScrapperArchitecture}
                magnifierSize="50%"
                square="true"
                imageAlt="Job Webscrapper Architecture"
              />
            </div>
            <br></br>
            <div className="demo-images">
              <p>Portion of the MySql table:</p>

              <GlassMagnifier
                imageSrc={JobScrapperRDS}
                magnifierSize="50%"
                square="true"
                imageAlt="database-table"
              />
            </div>

            <div>
              <Button
                variant="secondary"
                className="source-code-button"
                onClick={() =>
                  window.open(
                    "https://github.com/nickfurk/HKjobs_webscrapper_IT",
                    "_blank"
                  )
                }
              >
                Source code
              </Button>
            </div>
          </Accordion>

          {/* --- TREE BIEN --- */}
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
                <li className="tech-stack-line">
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
                <Button
                  variant="secondary"
                  className="source-code-button"
                  onClick={() =>
                    window.open(
                      "https://github.com/henrychu111/COMP-2800-Team-DTC-04-Tree-Bien",
                      "_blank"
                    )
                  }
                >
                  Source code
                </Button>
              </span>
              <span>
                <Button
                  variant="secondary"
                  className="view-site"
                  onClick={() =>
                    window.open("https://tree-bien.herokuapp.com/", "_blank")
                  }
                >
                  View site
                </Button>
              </span>
            </div>
          </Accordion>

          {/* --- CAPWISE --- */}
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
                <li className="tech-stack-line">
                  Tech stack: JavaScript, HTML/CSS, Bootstrap, Firebase
                </li>
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
              <Button
                variant="secondary"
                className="source-code-button"
                onClick={() =>
                  window.open(
                    "https://github.com/sallyklpoon/CapWise",
                    "_blank"
                  )
                }
              >
                Source code
              </Button>
              <Button
                variant="secondary"
                className="view-site"
                onClick={() =>
                  window.open("https://capwise-fac45.web.app/", "_blank")
                }
              >
                View site
              </Button>
            </div>
          </Accordion>

          {/* --- BOOK MANAGER --- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6>Book Manager</h6>
            </AccordionSummary>
            <AccordionDetails>
              <div className="task-description">
                <li>Command line application to manage book collection</li>
                <li>
                  Application allows user to search for a books by author,
                  title, publisher, shelf, category, or subject. The user can
                  move book from one shelf to another and have the changes saved
                  as a json file when exiting
                </li>
                <li>
                  Application detects if there is a json file before starting,
                  if there is an existing json file then it reads from it, else
                  opens excel file
                </li>
                <li className="tech-stack-line">Tech stack: Python</li>
              </div>
            </AccordionDetails>

            <div className="demo-images">
              <p>Search for a book:</p>
              <GlassMagnifier
                imageSrc={BookManager1}
                magnifierSize="50%"
                square="true"
                imageAlt="Book-Manager-Search"
              />
            </div>
            <br></br>
            <div className="demo-images">
              <p>Move a book to another shelf:</p>

              <GlassMagnifier
                imageSrc={BookManager2}
                magnifierSize="50%"
                square="true"
                imageAlt="Book-Manager-Move"
              />
            </div>
            <div>
              <Button
                variant="secondary"
                className="source-code-button"
                onClick={() =>
                  window.open(
                    "https://github.com/nickfurk/book-manager",
                    "_blank"
                  )
                }
              >
                Source code
              </Button>
            </div>
          </Accordion>

          {/* --- BLACKJACK --- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6>Blackjack</h6>
            </AccordionSummary>
            <AccordionDetails>
              <div className="task-description">
                <li>one</li>
                <li>one</li>
                <li>one</li>
                <li className="tech-stack-line">Tech stack: Python</li>
              </div>
            </AccordionDetails>

            <div className="demo-images">
              <p>Search for a book:</p>
              <GlassMagnifier
                imageSrc={BookManager1}
                magnifierSize="50%"
                square="true"
                imageAlt="Book-Manager-Search"
              />
            </div>
            <br></br>
            <div className="demo-images">
              <p>Move a book to another shelf:</p>

              <GlassMagnifier
                imageSrc={BookManager2}
                magnifierSize="50%"
                square="true"
                imageAlt="Book-Manager-Move"
              />
            </div>
            <div>
              <Button
                variant="secondary"
                className="source-code-button"
                onClick={() =>
                  window.open("https://github.com/nickfurk/Blackjack", "_blank")
                }
              >
                Source code
              </Button>
            </div>
          </Accordion>

          {/* --- TEXT BASED ADVENTURE --- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6>Text Based Adventure</h6>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <li>one</li>
                <li>one</li>
                <li>one</li>
                <li className="tech-stack-line">one</li>
              </div>
            </AccordionDetails>
            <div>
              <Button
                variant="secondary"
                className="source-code-button"
                onClick={() => window.open("link", "_blank")}
              >
                Source code
              </Button>
            </div>
          </Accordion>
        </div>
      </Element>
    </React.Fragment>
  );
}
