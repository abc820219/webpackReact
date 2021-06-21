import React, { Component } from 'react'
import MYButton from '../../components/MYButton/index'
import './index.scss'
export default class index extends Component {
  render() {
    return (
      <div className="board">
        <div className="board-upload">
          <MYButton to="/">返回</MYButton>
          <h2>發表一篇文章</h2>
          <div className="input-item">
            <label>文字內容:</label>
            <input type="text" />
          </div>
          <div className="input-item">
            <label>圖片檔案:</label>
            <input type="file" />
          </div>
          <MYButton>送出</MYButton>
        </div>
        <hr />
        <ul className="board-list">
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
          <li>
            <p>hi</p>
            <img src="" />
          </li>
        </ul>
      </div>
    )
  }
}
