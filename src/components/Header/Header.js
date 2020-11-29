import styles from './Header.module.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import data from '../../mock/data.json';
import { PageHeader, Button, Menu, Dropdown } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
class Header extends Component {
  constructor() {
    super();
    this.state = {
      initLoading: true,
      loading: false,
      cateogries: [],
    };
    this.cateogries = [];
  }
  componentDidMount() {

  }
  retrieveCategory() {
    data.posts.map((element) =>
    {
      element.cateogries.map((category) =>
      {
        if (
          this.cateogries &&
          this.cateogries.find((x) => x.name == category.name)
        )
          console.log(category.name + ' already exists');
        else
          this.cateogries.push({ name: category.name, value: true });
      });
    });


    this.setState({
      cateogries: this.cateogries,
    });
  }
  onChange() {}

  render() {
    return (
      <PageHeader
        className="site-page-header-responsive"
        title="Books List"
        extra={[
          // <Dropdown overlay={menu}></Dropdown>,
          // <Checkbox.Group
          //   options={
          //     this.state.cateogries ?
          //       this.state.cateogries.map(column =>
          //         (
          //           { label: column.name, value: column.value }
          //         ))
          //     : null
          //   }
          //   onChange={this.onChange} />,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}
      ></PageHeader>
    );
  }
}

export default Header;
