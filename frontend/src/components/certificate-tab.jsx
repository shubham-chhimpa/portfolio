import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {} from "@fortawesome/free-solid-svg-icons";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { dataJson } from "../data/data.jsx";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CertificateTab(props) {
  const classes = useStyles();

  const certificateArray = props.data.data.certificates.map((certificate) => (
    <VerticalTimelineElement
      key={certificate.image}
      className="vertical-timeline-element--education"
      date={certificate.issued}
      iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      icon={<SchoolIcon />}
    >
      <h4 className="vertical-timeline-element-title">{certificate.title}</h4>
      <h5 className="vertical-timeline-element-subtitle ">
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {certificate.company}
        </Typography>
      </h5>
      <img
        style={{
          marginTop: "16px",
        }}
        src={`https://drive.google.com/uc?export=view&id=${certificate.image}`}
        alt="certificate"
        className="my-responsive-image"
      />
      <p>
        <a href={certificate.credential} style={{ textDecoration: "None" }}>
          See Credential
        </a>
      </p>
    </VerticalTimelineElement>
  ));

  return (
    <Container maxWidth="lg">
      <VerticalTimeline>
        {certificateArray}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </Container>
  );
}
