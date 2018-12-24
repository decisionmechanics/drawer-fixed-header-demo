import React, { Component } from "react";
import "./App.css";
import Button from "@material-ui/core/Button/Button";
import DrawerWithHeader from "./DrawerWithHeader";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpen: false
    };
  }

  toggleDrawer = () => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  };

  render() {
    return (
      <div className="App">
        <Button variant="contained" color="primary" onClick={this.toggleDrawer}>
          Toggle Drawer
        </Button>

        <DrawerWithHeader
          open={this.state.isDrawerOpen}
          onClose={this.toggleDrawer}
        />
      </div>
    );
  }
}

export default App;
