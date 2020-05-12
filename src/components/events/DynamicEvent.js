import React from "react";
import { PartyContext } from "./../../context/Party";
import MainAuthForm from "../authentication/authPopUp/MainAuthForm";

import Cuisine from "../generic/Cuisine";
import DatePicker from "../generic/DatePicker";
import Location from "../generic/Location";
// import Addons from "../generic/Addons";
import Footer from "../Footer";
import "../../App.scss";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "When is your event?",
    "Where is your event?",
    "Choose your cuisine",
    // "Choose your entertainment",
  ];
}

function getStepContent(stepIndex, props) {
  switch (stepIndex) {
    case 0:
      return <DatePicker />;
    case 1:
      return <Location />;
    case 2:
      return <Cuisine />;
    // case 3:
    //   return <Addons />;
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper(props) {
  const { title } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const partyContext = React.useContext(PartyContext);

  const handleNext = () => {
    let activeStep = 0;
    setActiveStep((prevActiveStep) => {
      return (activeStep = prevActiveStep + 1);
    });
    if (activeStep >= 3) {
      // POST to API
      partyContext.state.setEventType(title);
      partyContext.state.createParty(title);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Button
        onClick={() => props.history.push("/homepage")}
        style={{ float: "left" }}
      >
        Home
      </Button>
      <div className={title}>
        <h1>{title?.toUpperCase()}</h1>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                <MainAuthForm />
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep, props)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
