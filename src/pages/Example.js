// import { InputDate } from "elements/Form";
import Breadcrumb from "elements/Breadcumbs";
import Number from "elements/Form/InputNumber";
import React, { Component } from "react";
export default class Example extends Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <div className="row align-items-center justify-content center">
          <div className="col-auto">
            <Number
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
