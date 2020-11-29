import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Books.module.css';
import { List, Avatar, Button, Skeleton, PageHeader } from 'antd';
import data from '../../mock/data.json';

class Books extends Component {
  constructor() {
    super();
    this.state = {
      initLoading: true,
      loading: false,
      listData: [],
      cateogries: [],
    };
    this.listData = [];
    this.pageSize = 10;
    this.totalCount = 0;
    this.cateogries = [];

  }
  retrieveBookList(pageNumber) {
    var startIndex = (pageNumber - 1) * this.pageSize;
    var endIndex = (this.pageSize + startIndex);
    this.totalCount = data.posts.length;
    data.posts.slice(startIndex, endIndex).map((element) => {
      this.listData.push({
        Title: element.title,
        Id: element.id,
        PublishDate: element.publishDate,
        Summary: element.summary,
        Author: element.author,
        Categories: element.categories
      });
    });
    this.setState({
      initLoading: false,
      listData: this.listData,
    });
  }

  componentDidMount() {
    this.retrieveBookList(1);
    this.setState({
      initLoading: false,
      listData: this.listData,
    });
  }
  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            this.setState({
              listData: [],
            });
            this.listData = [];
            this.retrieveBookList((page));
          },
          pageSize: 10,
          total: this.totalCount
        }}
        dataSource={this.state.listData}

        renderItem={item => (
          <List.Item
            key={item.Id}
            extra={
              <img
                width={100}
                alt="logo"
                src={item.Author.avatar}
              />
            }
          >
            <List.Item.Meta
              title={item.Author.name}
              description={item.PublishDate}
            />
            {item.Summary}
          </List.Item>
        )}
      />
    )
  }
}

export default Books;
