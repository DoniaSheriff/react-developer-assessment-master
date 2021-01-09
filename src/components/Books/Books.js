import { React, Component } from 'react';
import 'antd/dist/antd.css';
import './Books.module.css';
import { List } from 'antd';
import CheckBoxGroup from '../CheckBoxGroup/CheckBoxGroup';
import data from '../../mock/data.json';
import { Divider, PageHeader } from 'antd';
import moment from 'moment';

export default class Books extends Component {
  constructor() {
    super();
    this.state = {
      listData: [],
      categories: [],
      pageSize: 5,
      totalCount: 0,
      specificCategoryFlag: false,
      CheckedList: [],
      pageNumber:1
    };
    this.listData = [];
    this.categories = [];
    this.CheckedList = [];
    this.retrieveCategory();    
    this.totalCount=0;
  };
  retrieveAllBookList(pageNumber) {
    this.setState({ listData: [], CheckedList: [] });
    this.CheckedList = [];
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
        totalCount: this.totalCount
      });
    }
  };
  handleChange = ({ target: { label, checked } }) => {
    if (checked)
      this.CheckedList.push(label);
    else
      this.CheckedList.pop(label);
    this.setState({ [label]: checked, CheckedList: this.CheckedList });
    this.retrieveSpecificCategory(this.state.pageNumber);
  };
  componentDidMount() {
    if (!this.state.specificCategoryFlag)
      this.retrieveAllBookList(1);
    else
    {
      this.retrieveSpecificCategory(this.state.pageNumber);
    }
    this.setState({
      listData: this.listData,
    });
  };
  retrieveCategory() {
    if (data && data.posts) {
      data.posts.map((element) => {
        if (element.categories) {
            element.categories.map((category) => {
              if (
                !this.categories ||
                !this.categories.find((x) => x === category.name)
              )
                this.categories.push(category.name);
              return true;
            });
        }
        return true;
      });
    }
    this.setState({
      categories: this.categories,
    });
  };
 
  retrieveSpecificCategory(pageNumber) {
    this.setState({ listData: [] });
    this.listData = [];
    var startIndex = (pageNumber - 1) * this.state.pageSize;
    var endIndex = this.state.pageSize + startIndex;
    if (data && data.posts && this.CheckedList && this.CheckedList.length > 0) {
      var listOfSpecificCategories = [];
      data.posts.map((element) => {
        this.CheckedList.forEach(checkedItem => {
          element.categories.forEach(category => {
            if (category.name === checkedItem) {
              if (
                !listOfSpecificCategories ||
                !listOfSpecificCategories.find((x) => x.id === element.id)
              )
                listOfSpecificCategories.push(element);
              return;
            }

          });
        });
        return true;
      });
      this.totalCount = listOfSpecificCategories.length;
      listOfSpecificCategories.slice(startIndex, endIndex).map((element) => {
        this.listData.push({
          Title: element.title,
          Id: element.id,
          PublishDate: moment(element.publishDate).format('DD/MM/YYYY hh:mm A'),
          Summary: element.summary,
          Author: element.author,
          Categories: element.categories
        });
        return true;
      })
      this.setState({
        listData: this.listData,
        totalCount: this.totalCount
      });
    }
    else
      this.retrieveAllBookList(1);

  };
  render()
  {
    return (
        <div>
      <div style={{ background: 'lightseagreen' }}>
        <PageHeader
          className="site-page-header-responsive"
          title="Our Books Store"
          backIcon=""
          style={{ display: 'inline-flex', width: '100%' }}
        >
          <button style={{
            position: "absolute", right: "10px", background: "inherit", color: "white"
          }}
              onClick={() => {
                this.setState({ specificCategoryFlag: !this.state.specificCategoryFlag });
                if (this.state.specificCategoryFlag)
                  this.retrieveAllBookList(1);
              }}>
           {this.state.specificCategoryFlag? "All Categories":"Specific Categories"}
            </button>
        </PageHeader>
          {this.state.specificCategoryFlag ? (
            <div style={{ marginLeft: 20 }}>
              <CheckBoxGroup
                {...this.state}
                options={this.categories}
                handleChange={this.handleChange}
              />{' '}
            
              <Divider />
            </div>
          ) : null}
        </div>
      <form>

            <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              this.setState({
                listData: [],
                pageNumber:page
              });
              this.listData = [];
              if (!this.state.specificCategoryFlag)
                this.retrieveAllBookList(page);
              else
                this.retrieveSpecificCategory(page);
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
        
      </form>
    </div>

    )
  }
}