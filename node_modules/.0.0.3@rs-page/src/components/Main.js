import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div className="pagelayout-container">
        <div className="pagelayout-widget">
          {this.renderWidget()}
        </div>
        <div className="pagelayout-content">
          {this.renderContent()}
        </div>
      </div>
    )
  }
}
