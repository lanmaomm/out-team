import React, { Component, PropTypes } from 'react'
import BreadCrumb, { Crumb } from 'rs-breadcrumb'
import { Link } from 'react-router';

export default class Header extends Component {
  static propTypes = {
    dataList: PropTypes.array,
    navList: PropTypes.array
  }

  static defaultProps = {
    dataList: [],
    navList: []
  }

  renderBread() {
    return (
      <BreadCrumb>
        {this.props.dataList.map(item => (
          <Crumb key={item.name}>
            {item.to ?
              <Link to={item.to}>{item.name}</Link> :
              <span>{item.name}</span>
            }
          </Crumb>
        ))}
      </BreadCrumb>
    )
  }

  renderNav() {
    return (
      <ul className="row">
        {this.props.navList.map(item => (
          <div className="salt-col salt-col-8" key={item.name}>
            {item.to ?
              <Link to={item.to}>{item.name}</Link> :
              <span>{item.name}</span>
            }
          </div>
        ))}
      </ul>
    )
  }

  render() {
    if (this.props.navList.length !== 0) {
      return this.renderNav()
    }

    return this.renderBread()
  }
}
