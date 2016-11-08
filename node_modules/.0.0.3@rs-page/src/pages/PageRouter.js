import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

class Layout extends Component {
  render() {
    return this.props.children;
  }
}

const createLayout = (superclass, { trace, title, nav, useNav }) => class extends superclass {
  initial() {
    this.filterHeader()
  }

  filterHeader() {
    if (trace.length > 1) {
      this.header = [{ name: title, to: nav[0].to }].concat(trace)
    } else {
      this.headerNav = useNav ? nav : [{ name: title }]
    }
  }

}

const filterRule = (routes, trace, rootPath) => {
  let result = []
  routes.forEach((item, index) => {
    if (trace) {
      item.trace = trace.concat({
        to: `${rootPath}/${item.path}`,
        name: item.name
      });
    } else {
      item.trace = [{
        to: index === 0 ? item.path : `${rootPath}/${item.path}`,
        name: item.name
      }]
    }

    result.push(item)

    if (item.children) {
      result = result.concat(filterRule(item.children, item.trace, rootPath))
    }
  });
  return result;
}

const filterNav = (routes) => routes.map((item, index) => {
  return {
    to: index === 0 ? item.path : `${routes[0].path}/${item.path}`,
    name: item.name
  }
})

export default class App extends Component {

  rules = {}

  render() {
    let { routes, title, useNav } = this.rules;
    let ruleList = filterRule(routes, false, routes[0].path);
    let root = ruleList.shift();
    let nav = filterNav(routes);

    return (
      <Router history={browserHistory}>
        <Route path={root.path} component={Layout}>
          <IndexRoute component={createLayout(root.component, { trace: root.trace, title, nav, useNav })} />
          {ruleList.map(item => (
            <Route
              key={item.path}
              path={item.path}
              component={createLayout(item.component, { trace: item.trace, title, nav, useNav })}
            />
          ))}
        </Route>
      </Router>
    )
  }
}
