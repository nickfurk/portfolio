import React, { Component } from "react";
import { Badge, Button } from "react-bootstrap";
import "../css/awards.css";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";




export default class Awards extends Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <h3>
          <Badge bg="secondary">Awards</Badge>
        </h3>

        <div className="container">
            <p>YVR Smart Airport Hackathon | First Place (May 2023)</p>            
            <Button
                variant="outline-secondary"
                className="button-style"
                onClick={() =>
                  window.open("https://www.yvr.ca/en/blog/2023/innovation-hub-hackathon", "_blank")
                }
              >
                {" "}
                <VisibilityIcon /> see article
              </Button>
        </div>
      </div>
    );
  }
}