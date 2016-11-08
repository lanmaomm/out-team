import React from 'react'
import { PageLayout, PageRouter } from '../src'

import { Link } from 'react-router';

// 这里的 layout 是只一般你在项目核心目录里面自定义的一个 layout，所有的界面开发都有可能是继承于这个家伙
class Layout extends PageLayout {
  renderMainExtra() {
    return (
      <div>
        你可能要从这里去其他界面
        <div>
          <Link to="/examples/routerpage"> 网点管理 </Link>
        </div>
        <div>
        <Link to="/examples/routerpage/page5"> 网点商品管理 页</Link>
        </div>
        <div>
        <Link to="/examples/routerpage/page2"> 商品设置 页</Link>
        </div>
        <div>
        <Link to="/examples/routerpage/page2/page4"> 商品网点管理 页</Link>
        </div>
        <div>
        <Link to="/examples/routerpage/page3"> 网点标签 页 </Link>
        </div>
      </div>
    )
  }
}

class YourPage1 extends Layout {
  renderTopBar() {
    return <h2>网点管理</h2>
  }
}

class YourPage2 extends Layout {
  renderTopBar() {
    return <h2>网点商品管理</h2>
  }
}

class YourPage3 extends Layout {
  renderTopBar() {
    return <h2>商品设置</h2>
  }
}

class YourPage4 extends Layout {
  renderTopBar() {
    return <h2>商品网点管理</h2>
  }
}

class YourPage5 extends Layout {
  renderTopBar() {
    return <h2>网点标签</h2>
  }
}

const routes = [{
  name: '网点管理',
  path: '/examples/routerpage',
  component: YourPage1,
  children: [{
    name: '网点商品管理',
    path: 'page5',
    component: YourPage5
  }]
}, {
  name: '商品设置',
  path: 'page2',
  component: YourPage2,
  children: [{
    name: '商品网点管理',
    path: 'page2/page4',
    component: YourPage4
  }]
}, {
  name: '网点标签',
  path: 'page3',
  component: YourPage3
}]

export default class RouterPage extends PageRouter {
  rules = {
    routes,
    title: '多门店',
    useNav: true
  }
}
