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
import { GlassMagnifier, Magnifier } from "react-image-magnifiers";
import TreeDemo1 from "../images/treedemo1.png";
import TreeDemo2 from "../images/treedemo2.png";
import CapWiseDemo from "../images/capwise-demo.png";
import BookManager1 from "../images/bookmanager1.png";
import BookManager2 from "../images/bookmanager2.png";
import JobScrapperArchitecture from "../images/jobwebscrapper-architecture.png";
import JobScrapperRDS from "../images/webscrapper-rds.png";
import BlackJackImg from "../images/blackjack-example.png";
import PortfolioArchitecture from "../images/portfolio-architecture.png";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GitHubIcon from "@material-ui/icons/GitHub";
import BorderColorIcon from "@material-ui/icons/BorderColor";

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

          {/* --- CURRENT WEBSITE --- */}
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Badge pill variant="info" className="project-badge">
                aprilc.xyz (Current Website)
              </Badge>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <div className="task-description">
                <li>
                  Responsive React web app built with Bootstrap and Material-UI
                  frameworks
                </li>
                <li>
                  Deployed on AWS using CodeBuild which automatically helps
                  compile source code when new updates are pushed onto GitHub.
                  The objects are then updated in a S3 bucket which essentially
                  updates the website
                </li>
                <li>
                  Used CloudFlare for content network delivery (CDN) to improve
                  website load time, as well as CloudFlare's Secure Socket Layer
                  (SSL) for ensuring secure connections
                </li>
                <li className="tech-stack-line">
                  <span>
                    Tech stack: React, Bootstrap and Material-UI frameworks, AWS
                    CodeBuild and S3, CloudFlare CDN{" "}
                  </span>
                </li>
              </div>
            </AccordionDetails>
            <br></br>
            <div>
              <p>Architecture:</p>
              {/* <Magnifier
                imageSrc={PortfolioArchitecture}
                imageAlt="Portfolio Website Architecture"
              /> */}
              <img
                src={PortfolioArchitecture}
                alt="Portfolio Website Architecture"
                className="portfolio-architecture"
              />
            </div>
            <div>
              <Button
                variant="secondary"
                className="source-code-button"
                onClick={() =>
                  window.open("https://github.com/nickfurk/portfolio", "_blank")
                }
              >
                <GitHubIcon /> Source code
              </Button>
            </div>
          </Accordion>

          {/* --- JOB WEB SCRAPER --- */}
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Badge pill variant="info" className="project-badge">
                Job Web Scraper
              </Badge>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <div className="task-description">
                <li>
                  Web scraper extracts IT related job postings on a daily basis
                  from a{" "}
                  <a
                    href="https://www2.jobs.gov.hk/0/en/"
                    target="_blank"
                    id="job-link"
                  >
                    job board website
                  </a>{" "}
                </li>
                <li>
                  Python script used Beautifulsoup library to extract data from
                  HTML webpages
                </li>
                <li>
                  Application code is stored in a Docker image and is deployed
                  on AWS ECS using Fargate. Extracted data is stored in AWS RDS
                  (MySQL)
                </li>

                <li>
                  Daily crawling is set with schedule tasks (cron) on AWS ECS
                </li>
                <li className="tech-stack-line">
                  <span>
                    Tech stack: Python, Beautifulsoup Framework, Docker, AWS
                    (ECR, ECS, Fargate, RDS)
                  </span>
                </li>
              </div>
            </AccordionDetails>
            <br></br>
            <div className="jobwebscrapper-architecture">
              <p>Architecture:</p>
              {/* <Magnifier
                imageSrc={JobScrapperArchitecture}
                imageAlt="Job Webscrapper Architecture"
              /> */}
              <img
                src={JobScrapperArchitecture}
                alt="Job Webscraper Architecture"
              />
            </div>
            <br></br>
            <div className="demo-images">
              <p>Portion of the MySql table:</p>

              <Magnifier imageSrc={JobScrapperRDS} imageAlt="database-table" />
            </div>

            <div>
              <Button
                variant="secondary"
                className="source-code-button"
                onClick={() =>
                  window.open(
                    "https://github.com/nickfurk/job_webscraper_IT",
                    "_blank"
                  )
                }
              >
                <GitHubIcon /> Source code
              </Button>
            </div>
          </Accordion>

          {/* --- TREE BIEN --- */}
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Badge pill variant="info" className="project-badge">
                Tree Bien (React Web App)
              </Badge>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <div className="task-description">
                <li>
                  React mobile web app that allows users to find available
                  locations to plant trees and record/update data of planted
                  trees
                </li>
                <li>
                  Collaborated in a four-membered team using scrum agile
                  methodology
                </li>
                <li>
                  Implemented user stories for creating, editing, and deleting
                  of tree data stored in Firestore
                </li>
                <li className="tech-stack-line">
                  <span>
                    Tech stack: React, JavaScript, CSS, Bootstrap, Firebase,
                    Heroku
                  </span>
                </li>
              </div>
            </AccordionDetails>

            <div className="demo-images ">
              {/* <Magnifier imageSrc={TreeDemo1} imageAlt="Tree-Bien-Demo-1" /> */}
              <img
                src={TreeDemo1}
                alt="Tree-Bien_Demo-1"
                className="large-images"
              />
            </div>

            {/* <div className="demo-images">
              <GlassMagnifier
                imageSrc={TreeDemo1}
                magnifierSize="50%"
                square="true"
                imageAlt="Tree-Bien-Demo-1"
              />
            </div> */}

            <div className="demo-images">
              {/* <Magnifier imageSrc={TreeDemo2} imageAlt="Tree-Bien-Demo-2" /> */}
              <img
                src={TreeDemo2}
                alt="Tree-Bien_Demo-2"
                className="large-images"
              />
            </div>

            {/* <div className="demo-images">
              <GlassMagnifier
                imageSrc={TreeDemo2}
                magnifierSize="50%"
                square="true"
                imageAlt="Tree-Bien-Demo-2"
              />
            </div> */}

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
                  <GitHubIcon /> Source code
                </Button>
              </span>
              <span>
                <Button
                  variant="secondary"
                  className="view-site"
                  onClick={() =>
                    window.open(
                      "https://trello.com/b/X2n0ikYd/dtc-team-04",
                      "_blank"
                    )
                  }
                >
                  <BorderColorIcon /> Trello
                </Button>
              </span>
            </div>
          </Accordion>

          {/* --- CAPWISE --- */}
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Badge pill variant="info" className="project-badge">
                CapWise (Occupancy Counter)
              </Badge>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <div className="task-description">
                <li>
                  JavaScript web app that tracks the number of people in a
                  retail space, developed in collaboration with two other team
                  members
                </li>
                <li>
                  Built the marketing insight feature which enables the user to
                  add new promotions, view promotion performance as measured by
                  traffic change, filter promotions by relative date, and delete
                  promotions
                </li>

                <li className="tech-stack-line">
                  <span>
                    Tech stack: JavaScript, HTML/CSS, Bootstrap, Firebase
                  </span>
                </li>
              </div>
            </AccordionDetails>

            <div className="demo-images">
              {/* <Magnifier imageSrc={CapWiseDemo} imageAlt="CapWise-Demo" /> */}
              <img
                src={CapWiseDemo}
                alt="CapWise-Demo"
                className="large-images"
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
                <GitHubIcon /> Source code
              </Button>
              <Button
                variant="secondary"
                className="view-site"
                onClick={() =>
                  window.open("https://capwise-fac45.web.app/", "_blank")
                }
              >
                {" "}
                <VisibilityIcon /> View site
              </Button>
            </div>
          </Accordion>

          {/* --- BOOK MANAGER --- */}
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Badge pill variant="info" className="project-badge">
                Book Manager
              </Badge>{" "}
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

                <li className="tech-stack-line">
                  <span>Tech stack: Python </span>
                </li>
              </div>
            </AccordionDetails>

            <div className="demo-images">
              <p>Search for a book:</p>
              {/* <Magnifier
                imageSrc={BookManager1}
                imageAlt="Book-Manager-Search"
              /> */}
              <img
                src={BookManager1}
                alt="Book-Manager-Search"
                className="large-images"
              />
            </div>
            <br></br>
            <div className="demo-images">
              <p>Move a book to another shelf:</p>

              {/* <Magnifier imageSrc={BookManager2} imageAlt="Book-Manager-Move" /> */}
              <img
                src={BookManager2}
                alt="Book-Manager-Move"
                className="large-images"
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
                <GitHubIcon /> Source code
              </Button>
            </div>
          </Accordion>

          {/* --- BLACKJACK --- */}
          {/* <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Badge pill variant="info" className="project-badge">
                BlackJack
              </Badge>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <div className="task-description">
                <li>
                  User plays against the dealer (program) starting with $100 in
                  the purse. Each round has a minimum bet of $10. Game ends when
                  one deck of cards (52) runs out OR when the player has not
                  more money to bet
                </li>
                <li>
                  User decides if they want to hit (get another card) or stand
                  for each round
                </li>
                <li>
                  Game keeps track of the total wins, loss, ties and money left
                  for the player
                </li>
                <li className="tech-stack-line">
                  <span>Tech stack: Python</span>
                </li>
              </div>
            </AccordionDetails>

            <div className="demo-images blackjack">
              <p>Example of a game round:</p>
              <Magnifier
                imageSrc={BlackJackImg}
                imageAlt="Book-Manager-Search"
              />
            </div>
            <br></br>

            <div>
              <Button
                variant="secondary"
                className="source-code-button"
                onClick={() =>
                  window.open("https://github.com/nickfurk/Blackjack", "_blank")
                }
              >
                <GitHubIcon /> Source code
              </Button>
            </div>
          </Accordion> */}
        </div>
      </Element>
    </React.Fragment>
  );
}
