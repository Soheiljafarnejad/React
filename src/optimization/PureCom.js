import React, { PureComponent } from "react";

class PureCom extends PureComponent {
  state = { count: 1 };
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: 1 });
    }, 1000);
  }
  render() {
    console.log("rerender");
    return <section>{this.state.count}</section>;
  }
}

export default PureCom;
