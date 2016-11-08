import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as testAction from '../actions/test';

class Test extends Component {
    componentDidMount() {
      this.props.dataFetch();
    }

    render() {
      let { testData } = this.props;

      return (
        <div>
          <h2>{testData.count}</h2>
          <h3>{this.props.location ? this.props.location.pathname : ''}</h3>
        </div>
      );
    }
}

export default connect(
  (state) => ({testData: state.testData}),
  (dispatch) => bindActionCreators({ ...testAction }, dispatch)
)(Test);
