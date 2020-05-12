import React from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../../context/Authorization";
import { PartyContext } from "../../../context/Party";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export function FormDialog(props) {
  console.log("FormDialog -> props", props);
  const [open, setOpen] = React.useState(false);
  const [switchForm, setSwitchForm] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AuthContext.Consumer>
      {(context) => {
        const { loggedIn } = context.state;

        return (
          <PartyContext.Consumer>
            {(partyContext) => (
              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    loggedIn
                      ? props.history.push("/privatepage")
                      : handleClickOpen();
                  }}
                >
                  Check out
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    {!switchForm ? "Log in" : "Sign up"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Your event is a just few clicks away!
                    </DialogContentText>
                    {!switchForm ? <LoginForm /> : <SignUpForm />}
                  </DialogContent>
                  <DialogActions>
                    {switchForm
                      ? "Not logged in? Click here: "
                      : "Not with us yet? Click here: "}
                    <Button
                      onClick={() => setSwitchForm(!switchForm)}
                      color="primary"
                    >
                      {switchForm ? "Login" : "Sign Up"}
                    </Button>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            )}
          </PartyContext.Consumer>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default withRouter(FormDialog);
