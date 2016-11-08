import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" placeholder="Email" name="email" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Name" name="name" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-default">Sign in</button>
          </div>
        </div>
      </form>
    )
  }
}
