import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router';
import './Index.scss';

const DATA = [{
  href: 'dashboard',
  icon: <Icon type="bar-chart" />,
  name: '概况'
}, {
  href: 'shop',
  icon: '',
  name: '店铺'
}, {
  href: 'goods',
  icon: '',
  name: '商品'
}, {
  href: 'trade',
  icon: <Icon type="solution" />,
  name: '订单'
}];

const Index = (props) => {
  return (
    <div className="page-layout-sider">
      <h1>
        <a>{props.system.name}</a>
      </h1>
      <ul className="sider-nav">
      {DATA.map((item, index) => {
        return <li key={index}><Link to={item.href} className={props.location && props.location.pathname === '/' + item.href ? 'active' : ''}>{item.icon}{item.name}</Link></li>
      })}
      </ul>
      <h2 className="page-sider-logo">
        <a href="#" target="_blank">{props.system.name}</a>
      </h2>
    </div>
  );
}

export default Index;
