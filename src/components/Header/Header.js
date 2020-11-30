import styles from './Header.module.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import data from '../../mock/data.json';
import { PageHeader, Button, Menu, Dropdown , Checkbox , Row, Col  } from 'antd';
class Header extends Component {
  constructor() {
    super();
    this.state = {
      initLoading: true,
      loading: false,
      categories: [],
    };
    this.categories = [];
  }
  componentDidMount() {
    this.retrieveCategory();
  }
  retrieveCategory() {
    data.posts.map((element) =>
    {
      if(element.categories)
      {
        element.categories.map((category) =>
      {
        if (
          this.categories &&
          this.categories.find((x) => x.name == category.name)
        )
          console.log(category.name + ' already exists');
        else
          this.categories.push({ name: category.name, value: true });
      });
      }
    });


    this.setState({
      categories: this.categories,
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
          <Checkbox.Group
            options={
              this.state.categories ?
                this.state.categories.map(
                  column =>
                  (
                    { label: column.name, value: column.value }
                  ))
              : null
            }
            onChange={this.onChange} >
            {/* <Row>
              {
                this.categories.forEach(element => {
                  <Col span={8}>
                    <Checkbox value ={element.value}>
                      { element.name}
                    </Checkbox>
                  </Col>
                })
              }
            </Row> */}
            </Checkbox.Group>,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}
      ></PageHeader>
    );
  }
}

export default Header;
