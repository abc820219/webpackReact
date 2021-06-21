import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MYButton from '../../components/MYButton/index.js'
import './index.scss'
export default class index extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired,
        addHandler: PropTypes.func.isRequired,
    }
    render() {
        return (
            <div className="form-search">
                <input type="text" ref={(self) => (this.search = self)} />
                <MYButton
                    onClick={() => this.props.addHandler(this.search.value)}
                >新增紀錄</MYButton>
            </div>
        )
    }
}
