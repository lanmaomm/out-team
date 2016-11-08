import React from 'react';
import Layout from 'app/core/Layout';
import Grid from 'app/core/Good';
import { Input } from 'antd';

class Content extends Grid {
  formOptions =  {
    list: [{
      label: 'name',
      key: 'name',
      Content: Input
    }, {
      label: 'age',
      key: 'age',
      Content: Input
    }]
  }

  queryUrl = '/test'
  autoQuery = true

  tableOptions = {
    columns: [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    }],
    pagination: true
  }

  state = {
    formData: {
      name: '严伟庆',
      age: 25
    }
  }
  
}

@Layout.init
export default class Index extends Layout {
  renderContent() {
    return <Content />;
  }
}
