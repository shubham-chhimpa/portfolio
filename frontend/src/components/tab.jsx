import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {} from "@fortawesome/free-solid-svg-icons";

import "react-vertical-timeline-component/style.min.css";

import MeTab from "./me-tab.jsx";
import ProjectTab from "./project-tab.jsx";
import CertificateTab from "./certificate-tab.jsx";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // width: 500,
  },
  chip: {
    margin: "0px",
  },
}));

export default function MyTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  console.log(props.data);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        style={{ color: "white", backgroundColor: "black" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          // style={{color : "white",backgroundColor : "black"} }
        >
          <Tab label="ME" {...a11yProps(0)} />
          <Tab label="PROJECTS" {...a11yProps(1)} />
          <Tab label="CERTIFICATES" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          style={{ backgroundColor: "black" }}
        >
          <MeTab data={props.data} key="metab" />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
          style={{ backgroundColor: "black" }}
        >
          <ProjectTab data={props.data} />
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          dir={theme.direction}
          style={{ backgroundColor: "black" }}
        >
         <CertificateTab data={props.data}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
