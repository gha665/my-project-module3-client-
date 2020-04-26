import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default class SignUpForm extends React.Component {
  // handleSignupInput,
  // handleSignupSubmit,

  //const classes = useStyles();

  constructor(props) {
    super(props);

    this.state = { firstName: "", lastName: "", email: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const inputKey = event.target.name;
    const inputValue = event.target.value;
    this.setState({ [inputKey]: inputValue });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <Input
            id="firstName"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
            placeholder="Your first name..."
            inputProps={{ "aria-label": "description" }}
          />
          <Input
            id="lastName"
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
            placeholder="Your last name..."
            inputProps={{ "aria-label": "description" }}
          />
          <Input
            type="email"
            placeholder="Your email..."
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            inputProps={{ "aria-label": "description" }}
          />
          <Input
            type="password"
            placeholder="Your password..."
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            inputProps={{ "aria-label": "description" }}
          />
          <Button
            onClick={this.handleSubmit}
            variant="outlined"
            color="primary"
          >
            Let's Go!
          </Button>
        </form>
      </div>
    );
  }
}
