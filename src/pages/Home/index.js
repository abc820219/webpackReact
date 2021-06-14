import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
export default class index extends Component {
    render() {
        return (
            <div className="home">
                <h1 className="title">React練習專案</h1>
                <div className="content">歡迎光臨我的頁面</div>
                <button>
                    <Link to="/list">List</Link>
                </button>
            </div>
        )
    }
}
