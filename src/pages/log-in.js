import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import './log-in.css'

const LogIn = (props) => {
  const navigate=useNavigate()
  return (
    <div className="log-in-container">
      <Helmet>
        <title>コンテンツ名</title>
      </Helmet>
      <div className="log-in-log-in">
        <div className="log-in-main">
          <div className="log-in-title">
            <div className="log-in-text">
              <span className="log-in-text01">
                <span>ログイン</span>
              </span>
            </div>
            <img
              src="/images/loginshima.png"
              alt="login"
              className="log-in-image2"
            />
          </div>
          <div className="log-in-input-area">
            <div className="log-in-id">
              <div className="log-in-frame-input-label">
                <span className="log-in-text03">
                  <span>ID</span>
                </span>
                <div className="log-in-requirement">
                  <span className="log-in-text05">
                    <span>必須</span>
                  </span>
                </div>
              </div>
              <div className="log-in-support-text">
                <span className="log-in-text07">
                  <span>半角英数字で回答してください。</span>
                </span>
              </div>
              <input className="log-in-input" type="text"></input>
            </div>
            <div className="log-in-pass-word">
              <div className="log-in-frame-input-label1">
                <span className="log-in-text09">
                  <span>パスワード</span>
                </span>
                <div className="log-in-requirement1">
                  <span className="log-in-text11">
                    <span>必須</span>
                  </span>
                </div>
              </div>
              <div className="log-in-support-text1">
                <span className="log-in-text13">
                  <span>半角英数字で入力してください。</span>
                </span>
              </div>
              <input className="log-in-input1" type="text"></input>
            </div>
          </div>
          <div className="log-in-button-field">
            <button className="log-in-resist-button" onClick={() => navigate('/log-in-completed')}>
              <span className="log-in-text15">
                <span>ログインする</span>
              </span>
            </button>
            <button className="log-in-back-button" onClick={() => navigate('/registration-for-use')}>
              <span className="log-in-text17">
                <span>戻る</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn
