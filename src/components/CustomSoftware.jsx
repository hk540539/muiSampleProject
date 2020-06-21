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
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import roots from "../assets/root.svg";
import documentAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";
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
  const documentOptions = {
    loop: true,
    autoplay: false,
    animationData: documentAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation,
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
              to="/services"
              onClick={() => setValue(1)}
            >
              <img src={backArrow} alt="Back to service Page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid container item direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Custom Software Development{" "}
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
              to="/mobileapps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <img src={forwardArrow} alt="Forward to iOS/Android Page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        className={classes.rowContainer}
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        className={classes.rowContainer}
        item
        container
        direction={matchesMD ? "column" : "row"}
        justify="space-around"
        alignItems={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                architecto similique necessitatibus! Iusto adipisci eaque
                repellat aperiam, fuga pariatur nam reiciendis consequuntur
                animi, recusandae ratione!
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                placeat, et a esse alias dolore ut cupiditate ex?
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentOptions}
              isStopped={true}
              style={{ maxWidth: 275, maxHeight: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxWidth: 280, maxHeight: 260 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                Scale
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                placeat, et a esse alias dolore ut cupiditate ex?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        className={classes.rowContainer}
        item
        container
        direction="row"
        style={{ margin: "20em 0" }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={roots}
              alt="tree with roots extending out"
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography align="center" variant="h4" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography align="center" variant="body2" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellat!
            </Typography>
            <Typography align="center" variant="body2" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              laborum, blanditiis earum quo autem alias ipsa veniam optio nisi
              sed.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        className={classes.rowContainer}
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justify="space-around"
        style={{ marginBottom: "20em" }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                architecto similique necessitatibus! Iusto adipisci eaque
                repellat aperiam, fuga pariatur nam reiciendis consequuntur
                animi, recusandae ratione!
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                placeat, et a esse alias dolore ut cupiditate ex?
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              isStopped={true}
              style={{ maxWidth: 280, maxHeight: 290 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxWidth: 320, maxHeight: 620, minHeight: 550 }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            style={{ marginTop: matchesSM ? "3em" : undefined }}
          >
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                UX Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                placeat, et a esse alias dolore ut cupiditate ex?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                placeat, et a esse alias dolore ut cupiditate ex?
              </Typography>
            </Grid>{" "}
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                placeat, et a esse alias dolore ut cupiditate ex?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                placeat, et a esse alias dolore ut cupiditate ex?
              </Typography>
            </Grid>
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
