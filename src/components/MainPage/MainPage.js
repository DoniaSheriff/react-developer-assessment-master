import React, { Component } from 'react';
import Books from '../Books/Books';
import CheckBoxGroup from '../CheckBoxGroup/CheckBoxGroup';
import data from '../../mock/data.json';
import { Divider, PageHeader } from 'antd';
import './MainPage.module.css'
export default class MainPage extends Component {
  // state = {};
  constructor() {
    super();
    this.state = {
      initLoading: true,
      loading: false,
      categories: [],
      CheckedList:[]
    };
    this.categories = [];
    this.CheckedList = [];
  }

  handleChange = ({ target: { label, checked } }) => {
    this.CheckedList.push(label);
    this.setState({ [label]: checked, CheckedList:  this.CheckedList });
  }
  handleSubmit = (e) => {
    e.preventDefault();

    alert(JSON.stringify(this.state.CheckedList, null, 4));
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
            !this.categories.find((x) => x === category.name)
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
    <div>
      <div style={{  background: "lightseagreen"}}>
        <PageHeader
          className="site-page-header-responsive"
          title="Books List"
          backIcon=""
        />
        <div style={{ marginLeft: 20 }}>
          <CheckBoxGroup
            {...this.state}
            options={this.state.categories}
            handleChange={this.handleChange}
          />{' '}
          <Divider />
        </div>
      </div>
      <form onSubmit={this.handleSubmit}>
        <div style={{ marginTop: 20 }}>
          <button className="ant-btn ant-btn-primary" type="submit">
            Submit
        </button>
        </div>

        <Books filters={this.state.CheckedList}/>
      </form>
    </div>
  );
}
