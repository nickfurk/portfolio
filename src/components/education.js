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

export default class Education extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h3>
          <Badge bg="secondary">Education</Badge>
        </h3>
        <div className="education-section">
          <React.Fragment>
            <Timeline align="right">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography color="textSecondary">
                    <div className="program-title">
                      Computer Systems Technology (CST) Diploma
                    </div>
                    <div className="school">
                      British Columbia Institude of Technology <br />
                      Average 91%
                    </div>
                  </Typography>
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>Jan 2021 - Dec 2023</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography color="textSecondary">
                    <div className="program-title">
                      B.Sc. Biological & Physical Sciences (Double Major)
                    </div>
                    <div className="school">University of Alberta</div>
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  {/* <TimelineConnector /> */}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>Once upon a time</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </React.Fragment>
        </div>
      </div>
    );
  }
}
