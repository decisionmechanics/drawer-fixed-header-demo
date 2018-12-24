import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/es/styles";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Drawer from "@material-ui/core/Drawer/Drawer";
import IconButton from "@material-ui/core/IconButton/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";

const styles = {
  content: {
    width: 800,
    margin: 20
  }
};

const DrawerWithHeader = props => (
  <Drawer open={props.open} anchor="right" onClose={props.onClose}>
    <AppBar position="sticky" color="default">
      <Toolbar>
        <IconButton color="inherit" onClick={props.onClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6">Select interventions</Typography>
      </Toolbar>
    </AppBar>
    <ul className={props.classes.content}>
      {Array.from(Array(1000).keys()).map(n => (
        <li key={n}>Item {n + 1}</li>
      ))}
    </ul>
  </Drawer>
);

DrawerWithHeader.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

DrawerWithHeader.defaultProps = {
  open: false
};

export default withStyles(styles)(DrawerWithHeader);
