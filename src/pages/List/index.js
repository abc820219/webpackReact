import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from '../../components/Form/index.js'
import List from '../../components/List/index.js'
import './index.scss'
export default class index extends Component {
    state = {
        list: [{ id: 0, content: 'a' }],
    }
    addHandler = (content) => {
        console.log(content)

        let list = this.state.list
        let id = new Date().getTime()
        list.push({
            id,
            content,
        })
        this.setState({ list })
    }
    delHandler = (id) => {
        let list = this.state.list.filter((item) => {
            return item.id != id
        })
        this.setState({ list })
    }
    render() {
        return (
            <div className="form">
                <Form {...this.state} addHandler={this.addHandler} />
                <hr />
                <List {...this.state} delHandler={this.delHandler} />
                <Link to="/home">返回首頁</Link>
            </div>
        )
    }
}
