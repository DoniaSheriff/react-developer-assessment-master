import { React ,Component } from 'react';
import 'antd/dist/antd.css';
import data from '../../mock/data.json';
import { PageHeader, Button,Checkbox, Row, Col } from 'antd';
class Header extends Component  {
  constructor() {
    super();
    this.state = {
      initLoading: true,
      loading: false,
      categories: [],
    };
    this.categories = [];
  }

  onChange() { }

  render() {
    const grid = [

      // this.categories.forEach(element => {
      <Row>
        {
          this.categories.forEach(element => {
            <Col span={8}>
              <Checkbox value={element.value}>
                {element.name}
              </Checkbox>
            </Col>
          })
        }
      </Row>
      // })
    ];
    let index = 0;
    return (
      <PageHeader
        className="site-page-header-responsive"
        title="Books List"
        // extra={[
        //   // <Dropdown overlay={menu}></Dropdown>,
        //   <Checkbox.Group key={index++} class="grid-item grid-CheckBox"
        //     options={ 
        //       this.state.categories ?
        //         this.state.categories.map(
        //           column =>
        //           (
        //             { label: column.name, value: column.value }
        //           ))
        //       : null
        //     }
        //     onChange={this.onChange} >
        //     {/* <Row>
        //       {
        //         this.categories.forEach(element => {
        //           <Col span={8}>
        //             <Checkbox value ={element.value}>
        //               { element.name}
        //             </Checkbox>
        //           </Col>
        //         })
        //       }
        //     </Row> */}
        //   </Checkbox.Group>,
        //   <Button key="1" type="primary">
        //     Primary
        //   </Button>,
        // ]}
      ></PageHeader>
    );
  }
}

export default Header;
