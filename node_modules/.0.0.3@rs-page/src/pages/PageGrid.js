import React from 'react'
import PageLayout from '../core/PageLayout'
import WrapperForm from '../tmp/Form'
import WrapperTable from '../components/WrapperTable'

export default class PageGrid extends PageLayout {

  initial() {
    this.state = {};
    this.searchUrl = '';
  }

  renderTopBar() {
    return <WrapperForm />
  }

  renderMain() {
    return <WrapperTable />
  }
}
