import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from '../../components/Form/index.js'
import List from '../../components/List/index.js'
import MYButton from '../../components/MYButton/index.js'
import './index.scss'
export default class index extends Component {
    componentDidMount() {
        gsap.from(
            '.form',
            {
                opacity: 0,
                duration: 1,
                x: '30px',
                ease: 'slow(0.7,0.7,0.7,0.7, false)',
            },
            1
        )
    }
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
                <List {...this.state} delHandler={this.delHandler} />
                <MYButton to="/home" text="返回首頁" />
            </div>
        )
    }
}
