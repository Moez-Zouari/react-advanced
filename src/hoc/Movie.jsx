import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Movie extends Component {
  render() {
    return (
      <div>
        Movie
        {this.props.showTooltip && <div>Some Tool Tip</div>}
      </div>
    );
  }
}

export default withTooltip(Movie);
