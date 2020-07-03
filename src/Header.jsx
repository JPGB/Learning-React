import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AirlineSeatIndividualSuiteIcon from "@material-ui/icons/AirlineSeatIndividualSuite";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          This is our header!
        </Typography>
        <AirlineSeatIndividualSuiteIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
