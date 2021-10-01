import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  faLinkedinIn,
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

import { dataJson } from "../data/data.jsx";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function MeTab(props) {
  const classes = useStyles();
  const timelineArray = JSON.parse(JSON.stringify(props.data.data.timeline)).reverse().map(function(timeline,index) {
    if (timeline.type === "work") {
      return (
        <VerticalTimelineElement
          key = {"vte" + index}
          className="vertical-timeline-element--work"
          date={timeline.date}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">{timeline.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {timeline.subtitle}
          </h4>
          <p>
            <ul>
              <li>{timeline.about[0]}</li>
              <li>{timeline.about[1]}</li>
              <li>{timeline.about[2]}</li>
            </ul>
          </p>
        </VerticalTimelineElement>
      );
    } else {
      return (
        <VerticalTimelineElement
          key = {"vte" + index}
          className="vertical-timeline-element--education"
          date={timeline.date}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">{timeline.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {timeline.subtitle}
          </h4>
          <p>{timeline.about}</p>
        </VerticalTimelineElement>
      );
    }
  });
  return (
    <Container maxWidth="lg">
      <Grid
        spacing={3}
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item sm={12} lg={3} xl={3}>
          <Paper
            className={classes.paper}
            style={{
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            <Avatar
              alt="Shubham Chhimpa"
              src="/me.jpg"
              style={{
                width: "200px",
                height: "200px",
                marginLeft: "16px",
                marginRight: "16px",
              }}
            />
            <Grid item sm={12} lg={12} xl={12}>
              <Typography
                style={{ textAlign: "center", marginTop: "16px" }}
                variant="h6"
                color="textPrimary"
                gutterBottom
              >
                {props.data.data.name}
              </Typography>
            </Grid>
            <Grid item sm={12} lg={12} xl={12}>
              <IconButton onClick={() => (window.location = props.data.data.linkedin)}>
                <FontAwesomeIcon style={{}} icon={faLinkedinIn} size="lg" />
              </IconButton>
              <IconButton onClick={() => (window.location = props.data.data.github)}>
                <FontAwesomeIcon style={{}} icon={faGithubSquare} size="lg" />
              </IconButton>
              <IconButton onClick={() => (window.location = props.data.data.twitter)}>
                <FontAwesomeIcon style={{}} icon={faTwitterSquare} size="lg" />
              </IconButton>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        spacing={3}
        container
        alignItems="center"
        direction="column"
        justify="center"
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
            <Card style={{ textAlign: "center" }}>
              <CardHeader title="ABOUT ME" />
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {props.data.data.about}{" "}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <Grid item sm={12} lg={12} xl={12}>
        <Typography
          style={{
            textAlign: "center",
            marginTop: "36px",
            color: "white",
          }}
          variant="h4"
          gutterBottom
        >
          TIMELINE{" "}
        </Typography>
      </Grid>
      <VerticalTimeline>
        {timelineArray}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </Container>
  );
}
