import React from 'react'
import PageBase from './PageBase'
import Header from '../components/Header'
import Footer from '../components/Footer';

export default class PageLayout extends PageBase {

  containerClass = 'salt-pagelayout'

  renderHeader() {
    return (
      <div className="pagelayout-header">
        <Header dataList={this.header} navList={this.headerNav} />
      </div>
    )
  }

  renderMain() {
    return <h2>请自行覆盖renderMain等方法</h2>
  }

  renderFooter() {
    return (
      <div className="pagelayout-footer">
        <Footer />
      </div>
    )
  }
}
