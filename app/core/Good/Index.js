import React, { Component } from 'react';
import { Form, Icon, Input, Table, Row, Col, Button, message } from 'antd';
import request from 'app/vendor/request';
import './Index.scss';

const FormItem = Form.Item;

const DEFAULT_FORM_OPTIONS = {
  horizontal: true,
  formItemLayout: {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
  },
  colWidth: 8,
  list: [],
};

const DEFAULT_TABLE_OPTIONS = {
  columns: []
};

export default class Index extends Component {

  constructor(props) {
    super(props);
  }

  queryUrl = '/test'

  state = {
    formData: {},
    list: []
  }

  calcData(res) {
    this.setState({
      list: res.data,
      pagination: {
        current: res.current,
        total: res.total
      }
    });
  }

  handleFormChange(name, ev) {
    let { formData } = this.state;
    formData[name] = ev.target.value;
    this.setState({
      formData
    });
  }

  handleFormSearch(obj) {
    if (!obj) {
      obj = {};
    }
    request.get(this.queryUrl)
      .query(Object.assign({}, obj, this.state.formData))
      .promiseify()
      .then(res => {
        message.info('获取列表数据成功');
        this.calcData(res);
      }, err => {
        message.error(err);
      });
  }

  handlePagination(number) {
    this.handleFormSearch({
      page: number
    });
  }

  componentDidMount() {
    if (this.autoQuery) {
      this.handleFormSearch();
    }
  }

  renderForm() {
    let formOptions = Object.assign({}, DEFAULT_FORM_OPTIONS, this.formOptions);
    let { list, colWidth, formItemLayout, ...otherOptions } = formOptions;
    let { formData } = this.state;

    return (
      <div className="layout-form">
        <Form {...otherOptions}>
          <Row>
          {list.map((item, index) => {
            return (
              <Col span={colWidth} key={item.key}>
                <FormItem  {...formItemLayout} label={item.label}>
                  <item.Content
                    name={item.key}
                    value={formData[item.key]}
                    onChange={ev => this.handleFormChange(item.key, ev)}
                  />
                </FormItem>
              </Col>
            );
          })}
          </Row>
          <Row>
            <Col span={24} style={{textAlign: 'right'}}>
              <Button type="promary" onClick={ev => this.handleFormSearch()}>Search</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }

  renderGrid() {
    let tableOptions = Object.assign({}, DEFAULT_TABLE_OPTIONS, this.tableOptions);
    let { list } = this.state;
    if (tableOptions.pagination) {
      tableOptions.pagination = {
        ...this.state.pagination,
        onChange: (ev) => {this.handlePagination(ev);}
      };
    }

    return (
      <div className="layout-table">
        <Table {...tableOptions} dataSource={list} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderForm()}
        {this.renderGrid()}
      </div>
    );
  }
}
