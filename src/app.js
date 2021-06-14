import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home/index.js'
import List from './pages/List/index.js'
let App = class app extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/list">
                        <List />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default hot(App)
