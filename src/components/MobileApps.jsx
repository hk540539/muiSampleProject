import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";
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
        direction="row"
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
              to="/customsoftware"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <img src={backArrow} alt="Back to customsoftware Page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid container item direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              iOS/Android App Development
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
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam
              porro voluptate doloribus excepturi quas ut consectetur cumque?
              odio .
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam
              porro voluptate doloribus excepturi quas ut consectetur cumque?
              odio accusamus.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <img src={forwardArrow} alt="Websites development Page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        className={classes.rowContainer}
        item
        container
        direction={matchesSM ? "column" : "row"}
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid container item direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body2"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              est eum id reiciendis fugit? Excepturi voluptatibus possimus
              dolorum temporibus sequi.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body2"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni
              quasi sit velit sequi minima, odit dolorem deleniti? Nostrum,
              eaque.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={defaultOptions}
            isStopped={true}
            style={{ maxWidth: "20em" }}
          />
        </Grid>
        <Grid container item direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body2"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              est eum id reiciendis fugit? Excepturi voluptatibus possimus
              dolorum temporibus sequi.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body2"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni
              quasi sit velit sequi minima, odit dolorem deleniti? Nostrum,
              eaque.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginBottom: "15em" }}
      >
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography variant="h4" gutterBottom align="center">
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss images" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom align="center">
              Extend Acces
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt="swiss images"
              style={{ maxWidth: matchesXS ? "20em" : "28em" }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography variant="h4" gutterBottom align="center">
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt="swiss images" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
