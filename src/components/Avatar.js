import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  medium: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ImageAvatars({ size, src }) {
  const classes = useStyles();

  switch (size) {
    case "small":
      return (
        <div className={classes.root}>
          <Avatar alt={src} variant="rounded" src={src} className={classes.small} />
        </div>
      );

    case "medium":
      return (
        <div className={classes.root}>
          <Avatar alt={src} variant="rounded" src={src} className={classes.medium} />
        </div>
      );
    case "large":
      return (
        <div className={classes.root}>
          <Avatar alt={src} variant="rounded" src={src} className={classes.large} />
        </div>
      );
  }
}
