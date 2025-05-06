import React, { Component } from "react";

class GalleryItem extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <a href={this.props.href}>
          <img
            loading="lazy"
            src={this.props.src}
            alt={this.props.title}
            className="featured-img"
          ></img>
        </a>
        {/* <div className="overlay">{this.props.title}</div> */}
      </div>
    );
  }
}

export default GalleryItem;
