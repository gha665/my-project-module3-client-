import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { AuthContext } from "../../../context/Authorization";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export function FormDialog(props) {
  console.log("FormDialog -> props", props);
  const [open, setOpen] = React.useState(false);
  const [openForm, setOpenform] = React.useState(false);
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
              <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
              <DialogContent>
                <DialogContentText>Sign up or log in</DialogContentText>
                <LoginForm />
                <SignUpForm />
                {/* <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                /> */}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Switch
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default withRouter(FormDialog);