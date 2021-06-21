import React, { Component } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
export default class index extends Component {
    render() {
        return (
            <button {...this.props} className={'myButton ' + this.props.className}>
                {this.props.to ? (
                    <Link to={this.props.to}>{this.props.children}</Link>
                ) : (
                    this.props.children
                )}
            </button>
        )
    }
}
