import React, { Component } from "react";
import Books from "../Books/Books";
import CheckBoxGroup from "../CheckBoxGroup/CheckBoxGroup";
import data from '../../mock/data.json';
import {  Divider } from 'antd'
export default class MainPage extends Component {

  // state = {};
  constructor() {
    super();
    this.state = {
      initLoading: true,
      loading: false,
      categories: [],
    };
    this.categories = [];
  }


  handleChange = ({ target: { label, checked } }) =>
    this.setState({ [label]: checked });

  handleSubmit = e => {
    e.preventDefault();

    alert(JSON.stringify(this.state.categories, null, 4));
  };
  componentDidMount() {
    this.retrieveCategory();
  }
  retrieveCategory() {
    data.posts.map((element) => {
      if (element.categories) {
        element.categories.map((category) => {
          if (
            !this.categories ||
            !this.categories.find((x) => x == category.name)
          )
            this.categories.push(category.name);
        });
      }
    });
    this.setState({
      categories: this.categories,
    });
  }
  render = () => (
    <form onSubmit={this.handleSubmit}>
      <div style={{ marginLeft: 20 }}>
        <CheckBoxGroup
          {...this.state}
          options={this.state.categories}
          handleChange={this.handleChange}
        />

        {/* <div style={{ marginTop: 20 }}>
          <button className="ant-btn ant-btn-primary" type="submit">
            Submit
        </button>
        </div> */}
 <Divider />
      </div>
      <Books />
    </form>
  );
}