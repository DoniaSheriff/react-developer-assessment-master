import {React,  Component} from 'react';
import 'antd/dist/antd.css';
import './Books.module.css';
import { List } from 'antd';
import data from '../../mock/data.json';
import moment from 'moment';

export default class Books extends Component {
  constructor() {
    super();
    this.state = {
      listData: [],
      cateogries: [],
      pageSize: 10,
      totalCount: 0,      
    };
    this.listData = [];
    this.cateogries = [];
  }
  retrieveAllBookList(pageNumber) {
    this.setState({listData:[]});
    var startIndex = (pageNumber - 1) * this.state.pageSize;
    var endIndex = (this.state.pageSize + startIndex);
    this.totalCount = data.posts.length;
    if (data && data.posts) {
        data.posts.slice(startIndex, endIndex).map((element) => {
          this.listData.push({
            Title: element.title,
            Id: element.id,
            PublishDate: moment(element.publishDate).format('DD/MM/YYYY hh:mm A'),
            Summary: element.summary,
            Author: element.author,
            Categories: element.categories
          });
          return true;

        });
      this.setState({
        listData: this.listData,
        totalCount :this.totalCount
      });
    }
  }
  componentDidMount() {
    this.retrieveAllBookList(1);
    this.setState({
      listData: this.listData,
    });
  }
  // componentWillReceiveProps() {
  //    this.retrieveAllBookList(1);
  // }
  // componentDidUpdate() {
  //   if(this.props.filters.length>0 && this.categoryFlag )
  //   {
  //     this.retrieveAllBookList(1);
  //   }
  // }
  retrieveSpecificCategory() {
  }
  render() {
    return (
      <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            this.setState({
              listData: [],
            });
            this.listData = [];
            this.retrieveAllBookList((page));
          },
          pageSize: this.state.pageSize,
          total: this.state.totalCount
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
      </div>
    )
  }
}