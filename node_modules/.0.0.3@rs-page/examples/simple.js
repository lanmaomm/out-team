import React from 'react'
import { PageLayout } from '../src'

/*
 * 在你的项目里面，最好有一个 PageLayout 来继承 Zent 中 PageLayout 的功能，其他界面就此扩展，提高复用性
 */
class Layout extends PageLayout {
  header = [{
    to: '/examples/simple',
    name: '首页'
  }, {
    to: '/examples/simple/index1',
    name: '一级导航'
  }, {
    name: '当前页'
  }]
}

export default class YourPage extends Layout {
  renderContent() {
    return <div>321</div>
  }
}
