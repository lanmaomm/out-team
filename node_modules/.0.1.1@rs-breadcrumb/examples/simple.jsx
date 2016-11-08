import React, { Component } from 'react';
import BreadCrumb from '../src/breadcrumb.js';

export default class Example extends Component {
    render() {
        return (
            <BreadCrumb>
                <BreadCrumb.Crumb href="#">Home</BreadCrumb.Crumb>
                <BreadCrumb.Crumb href="">Link</BreadCrumb.Crumb>
                <BreadCrumb.Crumb>Data</BreadCrumb.Crumb>
                <BreadCrumb.Crumb className="active">Data</BreadCrumb.Crumb>
            </BreadCrumb>
        );
    }
}; 
