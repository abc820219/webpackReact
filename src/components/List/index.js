import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MYButton from '../../components/MYButton/index.js'
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
                {list.length ? (
                    list.map((item, i) => {
                        return (
                            <li key={item.id}>
                                <p>
                                    {i + 1}. {item.content}
                                </p>
                                <MYButton
                                    text="刪除"
                                    onClick={() =>
                                        this.props.delHandler(item.id)
                                    }
                                ></MYButton>
                            </li>
                        )
                    })
                ) : (
                    <li style={{ justifyContent: 'center' }}>無紀錄</li>
                )}
            </ul>
        )
    }
}
