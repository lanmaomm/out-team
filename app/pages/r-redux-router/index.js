import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import Layout from 'app/core/Layout';
import RedBase from 'app/core/Layout/RedBase';
import reducers from './reducers';

import Test from './containers/Test';

class Lay extends Layout {
  renderContent() {
    return <div>{this.props.children}</div>;
  }
}

const Index = (props) => (
  <Router history={hashHistory}>
    <Route component={Lay}>
      <Route path="/" component={Test} />
      <Route path="dashboard" component={Test} />
      <Route path="shop" component={Test} />
      <Route path="goods" component={Test} />
      <Route path="trade" component={Test} />
    </Route>
  </Router>
);

RedBase(Index, {
  reducers
});
