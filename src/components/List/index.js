import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
export default class index extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired,
        delHandler: PropTypes.func.isRequired,
    }
    render() {
        const { list } = this.props
        return (
            <ul className="list">
                {list.map((item) => {
                    return (
                        <li key={item.id}>
                            <p>{item.content}</p>
                            <button
                                onClick={() => this.props.delHandler(item.id)}
                            >
                                刪除
                            </button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
