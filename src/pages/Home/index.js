import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import MYButton from '../../components/MYButton/index.js'
export default class index extends Component {
    componentDidMount() {
        gsap.from(
            '.home',
            {
                opacity: 0,
                duration: 1,
                x: '30px',
                ease: 'slow(0.7,0.7,0.7,0.7, false)',
            },
            1
        )
    }
    render() {
        return (
            <div className="home">
                <div className="content">
                    <ul>
                        <li>作品名稱:紀錄表</li>
                        <li>-React-Basic</li>
                        <li>-React-Router</li>
                        <li>-React-PropType</li>
                        <li>-Webpack</li>
                        <li>
                            <MYButton
                                text={'前往作品'}
                                className={'a'}
                                to="/list"
                            ></MYButton>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
