import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import technologyAnimantion from "../animations/technologyAnimation/data.json";
import vision from "../assets/vision.svg";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

const Revolution = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: technologyAnimantion,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column">
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesSM ? "0" : "2em" }}
      >
        <Typography
          variant="h2"
          style={{ fontFamily: "Pacifico" }}
          align={matchesMD ? "center" : undefined}
        >
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "5em" }}
      >
        <Grid item lg>
          <img
            src={vision}
            alt="vision"
            style={{
              maxWidth: matchesSM ? 300 : "40em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? 0 : "5em",
            }}
          />
        </Grid>
        <Grid container item direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : "right"}
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              unde odit voluptate, est libero numquam.dolor sit amet,
              consectetur adipisicing elit. Dolorem unde odit voluptate, est
              libero numquam.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              unde odit voluptate, est libero numquam.ipsum dolor sit amet, con
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              unde odit voluptate, est libero numquam.amet, consectetur
              adipisicing elit. Dolorem unde odit voluptate, est libero numquam.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              unde odit voluptate, est libero numquam. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Doloribus ipsam repudiandae
              cumque porro rem!
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              unde odit voluptate, est libero numquam.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid
          container
          item
          direction="column"
          lg
          style={{ maxWidth: "40em", marginRight: "5em" }}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              unde odit voluptate, est libero numquam.dolor sit amet,
              consectetur adipisicing elit. Dolorem unde odit voluptate, est
              libero numquam.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              unde odit voluptate, est libero numquam.ipsum dolor sit amet, con
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              unde odit voluptate, est libero numquam.amet, consectetur
              adipisicing elit. Dolorem unde odit voluptate, est libero numquam.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              unde odit voluptate, est libero numquam. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Doloribus ipsam repudiandae
              cumque porro rem!
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              unde odit voluptate, est libero numquam.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify={matchesMD ? "center" : "flex-end"} lg>
          <Lottie
            options={defaultOptions}
            isStopped={true}
            style={{ maxWidth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        justify="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#B3B3B3", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Consulation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={consultation}
            alt="consultation"
            width="100%"
            style={{ maxWidth: 700 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#FF7373", height: "90em" }}
        align={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={mockup}
            alt="mockup"
            style={{ maxWidth: 1000 }}
            width="100%"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39B54A", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img width="100%" src={review} alt="mockup" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#A67C52", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            width="100%"
            src={design}
            alt="mockup"
            style={{ maxWidth: 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39B54A", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img width="100%" src={review} alt="consultation" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#FBB03B", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            width="100%"
            src={build}
            alt="consultation"
            style={{ maxWidth: matchesMD ? 700 : 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#C1272D", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            width="100%"
            src={launch}
            alt="consultation"
            style={{ maxWidth: 200 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#8E45CE", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            width="100%"
            src={maintain}
            alt="consultation"
            style={{ maxWidth: 500 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#29ABE2", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae explicabo qui perspiciatis repellat eos ipsam eius vel
              labore eligendi.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img width="100%" src={iterate} alt="consultation" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Revolution;
