import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";

import "react-vertical-timeline-component/style.min.css";

import {
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

import { dataJson } from "../data/data.jsx";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function ProjectTab(props) {
  const classes = useStyles();
  const projectArray = props.data.data.projects.map((project) => (
    <Grid
      spacing={3}
      container
      alignItems="center"
      direction="column"
      justify="center"
      key={project.githubLink}
    >
      <Grid
        item
        xm={12}
        sm={4}
        lg={12}
        xl={12}
        container
        alignItems="center"
        direction="column"
        justify="center"
      >
        <Box width={1 / 2} minWidth={300}>
          <Card style={{ textAlign: "center", padding: "0" }}>
            <Box width={1} minWidth={300}>
              {project.youtubeLink === "NA" ? (
                <h5> Video Not Available... </h5>
              ) : (
                <div
                  className="video"
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    paddingLeft: 16,
                    height: 0,
                  }}
                >
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    title="h"
                    src={project.youtubeLink}
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              )}
            </Box>

            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {project.title}
              </Typography>

              {project.techonologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  className={classes.chip}
                />
              ))}
            </CardContent>
            <CardActions>
              <Typography color="error" style={{ flex: 1, textAlign: "start" }}>
                {project.date}
              </Typography>
              <IconButton
                onClick={() => (window.location = project.githubLink)}
              >
                <FontAwesomeIcon icon={faGithubSquare} size="lg" />
              </IconButton>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </Grid>
  ));



  return (
    <Container maxWidth="lg">{projectArray}</Container>
  );
}
