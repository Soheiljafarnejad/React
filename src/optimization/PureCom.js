import React, { PureComponent } from "react";

class PureCom extends PureComponent {
  render() {
    console.log("pureCom");
    return <h2>{this.props.count}</h2>;
  }
}

export default PureCom;
