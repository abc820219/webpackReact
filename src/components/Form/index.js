import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
                <button
                    onClick={() => this.props.addHandler(this.search.value)}
                >
                    新增紀錄
                </button>
            </div>
        )
    }
}
