import React, { Component, PropTypes } from "react";
import ApiClient from "./api-client/ApiClient";
/**
 * Page

 */
export class Page extends Component {
  prepareUrl = id => {
    var url = "user&id=" + id;
    return url;
  };

  fetchData = () => {
    ApiClient.get(this.prepareUrl(1))
      .then(response => {
        console.log("page");
        console.log(response);
      })
      .catch(error => {
        console.log("error");
      });
  };
  render() {
    this.fetchData();
    return <div>MY COMPONENT2</div>;
  }
}

export default Page;
