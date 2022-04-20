import React, { Component } from "react";

import MemoCom from "./MemoCom";
import PureCom from "./PureCom";

class ParentCom extends Component {
  state = { count: 1 };
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: 1 });
    }, 1000);
  }
  render() {
    console.log("parent--------------------------------");
    return (
      <section>
        <PureCom count={this.state.count} />
        <MemoCom count={this.state.count} />
      </section>
    );
  }
}

export default ParentCom;
