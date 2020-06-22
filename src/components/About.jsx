import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";

import history from "../assets/history.svg";
import profile from "../assets/pp.png";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50rem",
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  avatar: {
    height: "25em",
    width: "25em",
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid direction="column" container>
      <Grid item className={classes.rowContainer}>
        <Typography variant="h2">About Us</Typography>
      </Grid>
      <Grid item container className={classes.rowContainer} justify="center">
        <Typography
          variant="h4"
          className={classes.missionStatement}
          align="center"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          similique! Eos officia possimus ex consectetur iure asperiores! Eum
          ipsam ducimus rem dolore provident deleniti, facere dicta quam ab nam
          unde!
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justify="space-around"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid on the block
              </Typography>
              <Typography variant="body2" paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab aut
                eveniet optio, deserunt culpa totam impedit soluta, officiis
                mollitia rerum, in eum beatae. Odio distinctio dicta fugiat
                placeat culpa nisi.
              </Typography>
              <Typography variant="body2" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem praesentium esse laborum, cumque vel ipsa a sunt enim
                odit, laudantium rerum numquam in earum amet omnis eaque modi
                distinctio quasi animi quo aut quam sequi nostrum obcaecati?
                Quis, fugit omnis?
              </Typography>
              <Typography variant="body2" paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur, ad.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item lg container justify="center">
            <img src={history} alt="history" style={{ maxHeight: "22em" }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        className={classes.rowContainer}
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" paragraph align="center">
            Hemanth Kumar, MERN Developer
          </Typography>
          <Typography variant="body2" paragraph align="center">
            I Started coding when i was 13 years old
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container>
          <Grid item container direction="column" lg>
            <Grid item>
              <img src={yearbook} alt="ffbook" />
            </Grid>
            <Grid item>
              <Typography variant="caption">A page about me</Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
            <Typography variant="body2" align="center" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              unde rem odio iste quis explicabo alias tempora omnis doloribus,
              impedit ipsa quod facilis repellendus? Accusamus doloribus vitae
              ipsum fugiat ullam.
            </Typography>
            <Typography variant="body2" align="center" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              unde rem odio iste quis explicabo alias tempora omnis doloribus,
              impedit ipsa quod facilis repellendus.
            </Typography>
          </Grid>
          <Grid item container direction="column" lg alignItems="flex-end">
            <Grid item>
              <img src={puppy} alt="pup" />
            </Grid>
            <Grid item>
              <Typography variant="caption">My puppy</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
