import React, { Component, Text } from "react";
// import { Text } from "react-native";
import { Badge } from "react-bootstrap";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import "../css/education.css";

export default class Work extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h3>
          <Badge bg="secondary">Relevant Working Experience</Badge>
        </h3>
        <div className="education-section">
          <React.Fragment>
            <Timeline align="right">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography color="textSecondary">
                    <div className="program-title">
                      Software Developer Intern
                    </div>
                    <div className="school">
                        Payment Source
                    </div>
                  </Typography>
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>Jan 2022 - Aug 2022</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography color="textSecondary">
                    <div className="program-title">
                      Business Development Manager
                    </div>
                    <div className="school">
                        Ecloudvalley Technology <br />
                        AWS Premier Consulting Partner
                        
                    </div>
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  {/* <TimelineConnector /> */}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>Jan 2018 - Jan 2020 </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </React.Fragment>
        </div>
      </div>
    );
  }
}