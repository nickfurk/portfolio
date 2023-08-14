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
// import { GlassMagnifier, Magnifier } from "react-image-magnifiers";
import TreeDemo1 from "../images/treedemo1.png";
import TreeDemo2 from "../images/treedemo2.png";
import CapWiseDemo from "../images/capwise-demo.png";
import BookManager1 from "../images/bookmanager1.png";
import BookManager2 from "../images/bookmanager2.png";
import JobScrapperArchitecture from "../images/jobwebscrapper-architecture.png";
import JobScrapperRDS from "../images/webscrapper-rds.png";
import BlackJackImg from "../images/blackjack-example.png";
import PortfolioArchitecture from "../images/portfolio-architecture.png";
import TextBasedAdventure from "../images/text-based-adventure.png";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GitHubIcon from "@material-ui/icons/GitHub";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import GameplayshopOtp from "../images/otp.png";

export default function SimpleAccordion() {
  return (
    <React.Fragment>
      <Element name="projects">
        <div className="project-section container">
          <br></br>
          <br></br>
          <br></br>

          <h1>
            <Badge bg="secondary">Projects</Badge>
            <FlareIcon />
          </h1>

          {/* --- YVR Water Monitoring System --- */}
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="project-title"
            >
                Water Monitoring System (YVR Airport)
            </AccordionSummary>
            <AccordionDetails>
              <div className="task-description">
                <li>
                  An R&D project undertaken by the Vancouver Airport Authority. Its purpose is to monitor
                  rising sea levels and water quality around the sea island on which Vancouver International Airport is on
                </li>
                <li>
                Redesigned AWS cloud architecture to optimize efficiency, scalability, and security by incorporating CI/CD, 
                serverless computing, robust backups, and caching mechanisms. The new design successfully gained client (YVR) approval
                </li>
                <li>
                Architected and tested the bi-directional communication feature between hardware devices and the dashboard. 
                This critical feature played a decisive role in the project's success
                </li>
                <li>
                Initiated collaboration with both the device team and the dashboard team to ensure successful planning and implementation of essential features
                </li>
                <li className="tech-stack-line">
                  <span>
                    Tech stack: AWS (IoT Core, Lambda, Timestream, Backup, SES, CodeArtifact, CloudWatch, DynamoDB, API Gateway), GitHub Actions
                  </span>
                </li>
              </div>
            </AccordionDetails>
            <br></br>
            {/* <div>
              <p>Architecture:</p>
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
            </div> */}
          </Accordion>

          {/* --- CURRENT WEBSITE --- */}
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="project-title"
            >
                aprilc.xyz (Current Website)
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
                  Used CloudFlare for content delivery network (CDN) to improve
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

          {/* --- Project Gateway --- */}
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="project-title"
            >
                AI Powered Patient App
            </AccordionSummary>
            <AccordionDetails>
              <div className="task-description">
                <li>
                  Gateway is an AI-powered app designed to address medical queries, summarize patient data, and manage patient information
                </li>
                <li>
                  Collaborated with a team of three members during a hackathon and completed the project within 24 hours
                </li>

                <li>
                  Led the backend development using the .dart language and integrated the app with the OpenAI API
                </li>
                <li className="tech-stack-line">
                  <span>
                    Tech stack: Flutter, .dart, OpenAI API
                  </span>
                </li>
              </div>
            </AccordionDetails>
            <br></br>
            <br></br>

            <div>
              <p>Demo Video:</p>
              <div className="gateway-demo">
                <iframe 
                  width="640" 
                  height="562" 
                  src="https://www.loom.com/embed/92d1df11b0b646169e531da2ae73f4fd?sid=80f5ef9a-a4e9-4323-b56a-22893b889ed0" 
                  frameborder="0" 
                  webkitallowfullscreen 
                  mozallowfullscreen 
                  allowfullscreen>
                </iframe>
              </div>
            </div>
            

            <div>
              <Button
                variant="secondary"
                className="source-code-button"
                onClick={() =>
                  window.open(
                    "https://github.com/Matirix/Project_Gateway",
                    "_blank"
                  )
                }
              >
                <GitHubIcon /> Source code
              </Button>
            </div>
          </Accordion>

          {/* --- GamePlayShop Backend --- */}
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="project-title"
            >
                GamePlayShop Backend
            </AccordionSummary>
            <AccordionDetails>
              <div className="task-description">
                <li>
                  Built RESTful APIs and backend logic for a co-op prepaid card project (gameplayshop.com)
                </li>
                <li>
                  Implemented user authentication process using AWS Cognito. Incorporating pre-authentication and post-confirmation features to enhance user security
                </li>
                <li>
                  Utilized AWS Pinpoint for phone pin verification, enabling the sending and verification of OTP messages whild validating phone numbers within the desired region
                </li>
                <li>
                  Integrated a 3rd-party vendor for payment verification, ensuring enchased transaction security
                </li>
                <li>
                Developed and tested API, updating the Swagger definition, and conducting testing with Postman, Visual Studio mock Lambda test tool, and AWS Lambda console to ensure accuracy and functionality
                </li>
                <li>
                  Collaborated with the frontend team, backend team, solutions architect, and 3rd-party providers
                </li>

                <li className="tech-stack-line">
                  <span>
                    Tech stack: C#, AWS
                  </span>
                </li>
              </div>
            </AccordionDetails>

            <div className="demo-images">
              <p>Enter number to send one time password:</p>

              <img
                src={GameplayshopOtp}
                alt="GamePlayShop send OTP text image"
                className="otp"
              />
            </div>

            <div>
              <Button
                variant="secondary"
                className="view-site"
                onClick={() =>
                  window.open("https://gameplayshop.com/", "_blank")
                }
              >
                {" "}
                <VisibilityIcon /> View site
              </Button>
            </div>
          </Accordion>


          {/* --- JOB WEB SCRAPER --- */}
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="project-title"
            >
                Job Web Scraper
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
            <div>
              <p>Architecture:</p>
              {/* <Magnifier
                imageSrc={JobScrapperArchitecture}
                imageAlt="Job Webscrapper Architecture"
              /> */}
              <img
                src={JobScrapperArchitecture}
                alt="Job Webscraper Architecture"
                className="jobwebscrapper-architecture"
              />
            </div>
            <br></br>
            <div className="demo-images">
              <p>Portion of the MySql table:</p>

              <img src={JobScrapperRDS} class="job-table" imageAlt="database-table" />
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
              className="project-title"
            >
                Tree Bien (React Web App)
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
              className="project-title"
            >
                CapWise (Occupancy Counter)
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

          {/* --- A Text-Based Adventure --- */}
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="project-title"
            >
                Text-Based Game
            </AccordionSummary>
            <AccordionDetails>
              <div className="task-description">
                <li>
                  A text-based roleplaying game where the player moves on a grid
                  and encounters monsters
                </li>
                <li>
                  The game is developed with one other member, it includes:
                  character type selections, levelling up of monsters' damage
                  point, levelling up of player's healing point, probability of
                  encountering monsters based on character type, and probability
                  of monsters running away. These data are stored in
                  dictionaries
                </li>
                <li>
                  The flow of the game is controlled by a while loop and it only
                  ends when the player and the monster boss HP are equal to zero
                  or less. Each function includes docstring and is tested by
                  either doctest(s) or unit tests
                </li>

                <li className="tech-stack-line">
                  <span>Tech stack: Python </span>
                </li>
              </div>
            </AccordionDetails>

            <div className="demo-images">
              <p>Sample round:</p>
              {/* <Magnifier
                imageSrc={BookManager1}
                imageAlt="Book-Manager-Search"
              /> */}
              <img
                src={TextBasedAdventure}
                alt="Text-Based Adventure Image"
                className="text-based-adventure"
              />
            </div>

            <div>
              <Button
                variant="secondary"
                className="source-code-button"
                onClick={() =>
                  window.open(
                    "https://github.com/nickfurk/text-based-game",
                    "_blank"
                  )
                }
              >
                <GitHubIcon /> Source code
              </Button>
            </div>
          </Accordion>

          {/* --- BOOK MANAGER --- */}
          {/* <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="project-title"
            >
                Book Manager
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
       
              <img
                src={BookManager1}
                alt="Book-Manager-Search"
                className="large-images"
              />
            </div>
            <br></br>
            <div className="demo-images">
              <p>Move a book to another shelf:</p>

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
          </Accordion> */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>


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
