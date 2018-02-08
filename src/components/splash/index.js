import React from "react";
import Dialog from "material-ui/Dialog";
import Button from "material-ui/Button";
import ring from "./../../images/SaveTheDateSplash.png"
const customContentStyle = {
  width: "100%",
  maxWidth: "none"
};

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
export default class Splash extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <Button primary={true} onClick={this.handleClose}>
        Cancel
      </Button>,
      <Button primary={true} onClick={this.handleClose}>
        Submit
      </Button>
    ];

    return (
      <div>
        <Button onClick={this.handleOpen} >Splash</Button>
        <Dialog
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
        SomeCOntec
        </Dialog>
      </div>
    );
  }
}
