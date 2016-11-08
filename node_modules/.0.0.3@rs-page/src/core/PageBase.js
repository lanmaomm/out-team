import React, { Component } from 'react';

export default class PageBase extends Component {
  constructor(props) {
    super(props)
    this.initial()
  }

  containerClass = ''

  /*
   *  内部封装
   */
  initial() {}

  renderHeader() {}
  renderTopBar() {}
  renderMain() {}
  renderMainExtra() {}
  renderBottomBar() {}
  renderFooter() {}

  render() {
    return (
      <div className={this.containerClass}>
        {this.renderHeader()}
        {this.renderTopBar()}
        {this.renderMain()}
        {this.renderMainExtra()}
        {this.renderBottomBar()}
        {this.renderFooter()}
      </div>
    );
  }
}
