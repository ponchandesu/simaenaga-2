import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import './sign-up-completed.css'

const SignUpCompleted = (props) => {
  const navigate=useNavigate()
  return (
    <div className="sign-up-completed-container">
      <Helmet>
        <title>コンテンツ名</title>
      </Helmet>
      <div className="sign-up-completed-sign-up-completed">
        <div className="sign-up-completed-main">
          <div className="sign-up-completed-title">
            <span className="sign-up-completed-text">
              <span>登録完了</span>
            </span>
          </div>
          <img
            src="/images/riyouCompleted.png"
            alt="riyouCompleted"
            className="sign-up-completed-image1"
          />
          <span className="sign-up-completed-text2">
            <span>コンテンツ名へようこそ！</span>
          </span>
          <div className="sign-up-completed-button-field">
            <button className="sign-up-completed-log-in-button" onClick={() => navigate('/main-screen')}>
              <span className="sign-up-completed-text4">
                <span>つぎへ</span>
              </span>
            </button>
            <button className="sign-up-completed-back-button" onClick={() => navigate('/')}>
              <span className="sign-up-completed-text6">
                <span>タイトルに戻る</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpCompleted
