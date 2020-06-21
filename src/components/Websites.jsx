import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";
import integrationAnimation from "../animations/integrationAnimation/data.json";
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  itemContainer: {
    maxWidth: "40em",
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

const CustomSoftware = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid
        className={classes.rowContainer}
        item
        container
        direction={matchesSM ? "column" : "row"}
        justify={matchesMD ? "center" : undefined}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginLeft: "-3.5em", marginRight: "1em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/mobileapps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <img src={backArrow} alt="Ios/Android Page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid container item direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam
              porro voluptate doloribus excepturi quas ut consectetur cumque?
              odio accusamus.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam
              porro voluptate doloribus excepturi quas ut consectetur cumque?
              odio .
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/services"
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
            >
              <img src={forwardArrow} alt="Websites development Page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        alignItems="center"
        direction={matchesSM ? "column" : "row"}
        style={{ marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                gutterBottom
                variant="h4"
                align={matchesSM ? "center" : undefined}
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                alt="analytics"
                style={{ marginLeft: "-2.5em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography variant="body2" align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            laudantium asperiores veritatis amet exercitationem cumque iste
            aspernatur rem blanditiis quaerat ab quasi obcaecati fuga.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        alignItems="center"
        direction={matchesSM ? "column" : "row"}
        justify="flex-end"
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.paragraphContainer}>
              <Typography align="center" gutterBottom variant="h4">
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt="ecommerce" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography variant="body2" align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            laudantium asperiores veritatis amet exercitationem cumque iste
            aspernatur rem blanditiis quaerat ab quasi obcaecati fuga.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                gutterBottom
                variant="h4"
                align={matchesSM ? "center" : undefined}
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt="Outreach" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography variant="body2" align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            laudantium asperiores veritatis amet exercitationem cumque iste
            aspernatur rem blanditiis quaerat ab quasi obcaecati fuga.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        alignItems="center"
        justify="flex-end"
        direction={matchesSM ? "column" : "row"}
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" gutterBottom variant="h4">
                Search Engine
                <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="seo" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography variant="body2" align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            laudantium asperiores veritatis amet exercitationem cumque iste
            aspernatur rem blanditiis quaerat ab quasi obcaecati fuga.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
