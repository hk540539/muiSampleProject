import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import ButtonArrow from "./ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background}) `,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground}) `,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },

  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("md")]: {
      marginRight: "0",
      marginLeft: "0",
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  message: {
    marginTop: "5em",
    border: `2px solid ${theme.palette.common.blue} `,
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));
const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
const Contact = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [helper, setHelper] = useState({
    emailHelper: "",
    phoneHelper: "",
  });

  const [openDialog, setDialog] = useState(false);
  const [progressLoading, progressSetLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const handleChange = (e) => {
    let valid;
    switch (e.target.id) {
      case "email":
        setContact({ ...contact, [e.target.id]: e.target.value });
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );
        if (!valid) {
          setHelper({ ...helper, emailHelper: "Invalid Email" });
        } else {
          setHelper({ ...helper, emailHelper: "" });
        }
        break;
      case "phone":
        setContact({ ...contact, [e.target.id]: e.target.value });
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );
        if (!valid) {
          setHelper({ ...helper, phoneHelper: "Invalid Number" });
        } else {
          setHelper({ ...helper, phoneHelper: "" });
        }
        break;
      default:
        setContact({ ...contact, [e.target.id]: e.target.value });
        break;
    }
  };

  const onConfirm = async () => {
    progressSetLoading(true);
    try {
      let response = await axios.get(
        "https://us-central1-materialui-110c8.cloudfunctions.net/sendMail",
        {
          params: {
            ...contact,
          },
        }
      );

      progressSetLoading(false);
      setDialog(false);
      setContact({
        ...contact,
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setAlert({
        open: true,
        message: "Message Sent Succesfully",
        backgroundColor: "#4bb543",
      });
    } catch (error) {
      progressSetLoading(false);
      setAlert({
        open: true,
        message: "Something went wrong,please try again!",
        backgroundColor: "#ff3232",
      });
    }
  };
  const buttonContents = (
    <React.Fragment>
      Send Message
      <img src={airplane} alt="paper plane" style={{ marginLeft: "1em" }} />
    </React.Fragment>
  );
  return (
    <Grid container direction="row">
      <Grid
        container
        item
        direction="column"
        style={{
          marginBottom: matchesSM ? "1em" : matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
        lg={4}
        xl={3}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h2"
                style={{ lineHeight: 1 }}
                align={matchesMD ? "center" : undefined}
              >
                Contact Us
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body2"
                style={{ color: theme.palette.common.blue }}
              >
                We' re waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em", fontSize: "1rem" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ color: theme.palette.common.blue }}
                >
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="tel:9191991919"
                  >
                    +91 91919 91919
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="phone"
                  style={{
                    marginRight: "0.5em",
                    verticalAlign: "bottom",
                    fontSize: "1rem",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ color: theme.palette.common.blue }}
                >
                  <a
                    href="mailto:hk540539@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    hk540539@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item>
                <TextField
                  style={{ marginBottom: "0.5em" }}
                  fullWidth
                  label="Name"
                  id="name"
                  value={contact.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <TextField
                  style={{ marginBottom: "0.5em" }}
                  fullWidth
                  error={helper.emailHelper.length !== 0}
                  helperText={helper.emailHelper}
                  label="Email"
                  id="email"
                  value={contact.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <TextField
                  style={{ marginBottom: "0.5em" }}
                  fullWidth
                  error={helper.phoneHelper.length !== 0}
                  helperText={helper.phoneHelper}
                  label="Phone"
                  id="phone"
                  value={contact.phone}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                value={contact.message}
                rows={10}
                multiline
                id="message"
                onChange={handleChange}
                className={classes.message}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                variant="contained"
                className={classes.sendButton}
                onClick={() => setDialog((prevState) => !prevState)}
                disabled={
                  contact.name.length === 0 ||
                  contact.message.length === 0 ||
                  contact.email.length === 0 ||
                  contact.phone.length === 0 ||
                  helper.emailHelper.length !== 0 ||
                  helper.phoneHelper.length !== 0
                }
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={openDialog}
        onClose={() => setDialog((prevState) => !prevState)}
        fullScreen={matchesXS}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em ",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
            paddingBottom: matchesXS ? "1em" : "5em ",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                label="Name"
                id="name"
                value={contact.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                error={helper.emailHelper.length !== 0}
                helperText={helper.emailHelper}
                label="Email"
                id="email"
                value={contact.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                error={helper.phoneHelper.length !== 0}
                helperText={helper.phoneHelper}
                label="Phone"
                id="phone"
                value={contact.phone}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
            <TextField
              fullWidth
              InputProps={{ disableUnderline: true }}
              value={contact.message}
              rows={10}
              multiline
              id="message"
              onChange={handleChange}
              className={classes.message}
            />
          </Grid>
          <Grid item>
            <Grid
              item
              container
              direction={matchesSM ? "column" : "row"}
              style={{ marginTop: "2em" }}
              alignItems="center"
            >
              <Grid item>
                <Button
                  style={{ fontWeight: 300 }}
                  color="primary"
                  onClick={() => setDialog((prevState) => !prevState)}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.sendButton}
                  onClick={onConfirm}
                  disabled={
                    contact.name.length === 0 ||
                    contact.message.length === 0 ||
                    contact.email.length === 0 ||
                    contact.phone.length === 0 ||
                    helper.emailHelper.length !== 0 ||
                    helper.phoneHelper.length !== 0
                  }
                >
                  {progressLoading ? (
                    <CircularProgress size={30} />
                  ) : (
                    buttonContents
                  )}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      <Grid
        container
        item
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        justify={matchesMD ? "center" : undefined}
        lg={8}
        xl={9}
        alignItems="center"
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? "0" : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                Simple Software.
                <br /> Revolutionary Results
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ fontSize: "1.5rem" }}
                align={matchesMD ? "center" : undefined}
              >
                Take advantage of 20th Centuary
              </Typography>
              <Grid container justify={matchesMD ? "center" : undefined}>
                <Grid>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    component={Link}
                    to="/revolution"
                    onClick={() => setValue(2)}
                  >
                    <span style={{ marginRight: 5 }}>Learn More</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            to="/estimate"
            onClick={() => setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
