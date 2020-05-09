import React from "react";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EventServices from "./../../services/EventServices";

const styles = (theme) => ({
  root: {
    maxWidth: 300,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 15,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class EventsList extends React.Component {
  state = {
    eventsList: [],
  };

  componentDidMount() {
    console.log("**GET /events", this.state);
    EventServices.service.get("/api/events").then((response) => {
      this.setState({
        eventsList: response.data,
      });
    });
  }

  render() {
    const { classes } = this.props;

    const bull = <span className={classes.bullet}>•</span>;

    return (
      <div>
        <h3>Upcoming Events</h3>

        {this.state.eventsList.map((event) => {
          return (
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                    { event.eventType.toUpperCase() }
                </Typography>
                <Typography variant="h5" component="h2">
                  { new Date(event.date).toDateString() }
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  { event.food }
                </Typography>
            
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(EventsList);
