import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home/index.js'
import List from './pages/List/index.js'
import './app.scss'
let App = class app extends Component {
    componentDidMount() {
        gsap.from(
            '.title',
            {
                opacity: 0,
                duration: 1,
                y: '-40px',
                ease: 'slow(0.7,0.7,0.7,0.7, false)',
            },
            1
        )
    }
    render() {
        return (
            <>
                <h1 className="title">React練習專案(紀錄表)</h1>
                <Switch>
                    <Route path="/list">
                        <List />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </>
        )
    }
}

export default hot(App)
