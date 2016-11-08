import React from 'react';
import Layout from 'app/core/Layout';

@Layout.init
export default class Index extends Layout {
  renderContent() {
    return <div>单页</div>
  }
}
