import React, { Component } from "react";
import { Link } from "react-router-dom";

class NormalLink extends Component {
  render() {
    return (
      <Link to={this.props.to} target={this.props.target}>
        <div className="normal-link">{this.props.text}</div>
      </Link>
    );
  }
}

export default NormalLink;
