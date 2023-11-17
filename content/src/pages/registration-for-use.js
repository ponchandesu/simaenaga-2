import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import './registration-for-use.css'

const RegistrationForUse = (props) => {
  const navigate=useNavigate()
  return (
    <div className="registration-for-use-container">
      <Helmet>
        <title>コンテンツ名</title>
      </Helmet>
      <div className="registration-for-use-registration-for-use">
        <div className="registration-for-use-main">
          <div className="registration-for-use-title">
            <span className="registration-for-use-text">
              <span>利用登録</span>
            </span>
          </div>
          <img
            src="/images/riyouTouroku.png"
            alt="riyouTouroku"
            className="registration-for-use-image1"
          />
          <div className="registration-for-use-button-field">
            <button className="registration-for-use-resist-button" onClick={() => navigate('/sign-up')}>
              <span className="registration-for-use-text2">
                <span>新規登録する</span>
              </span>
            </button>
            <button className="registration-for-use-log-in-button" onClick={() => navigate('/log-in')}>
              <span className="registration-for-use-text4">
                <span>ログインする</span>
              </span>
            </button>
            <button className="registration-for-use-back-button" onClick={() => navigate('/')}>
              <span className="registration-for-use-text6">
                <span>戻る</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForUse
