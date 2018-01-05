import React, { Component, PropTypes } from "react";
import Header from "./user-interface/Header";

export class Root extends Component {
  render() {
    let renderData = this.props.children;
    return (
      <div>
        <div className="container">
          <div className="col-xs-10">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Root;
