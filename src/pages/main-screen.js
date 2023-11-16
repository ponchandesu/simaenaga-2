import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import './main-screen.css'

const MainScreen = (props) => {
  const navigate=useNavigate()
  return (
    <div className="main-screen-container">
      <Helmet>
        <title>コンテンツ名</title>
      </Helmet>
      <div className="main-screen-main-screen">
        <div className="main-screen-header">
          <div className="main-screen-bar-text">
            <div className="main-screen-logo">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="main-screen-image"
              />
            </div>
            <div className="main-screen-hambirger-menu">
              <div className="main-screen-stacked">
                <img
                  src="/images/hambirger.svg"
                  alt="Ham"
                  className="main-screen-menu"
                />
                <span className="main-screen-text">
                  <span>メニュー</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="main-screen-main">
          <div className="main-screen-button">
            <button className="main-screen-internet-forum-button" onClick={() => navigate('/sign-up')}>
              <div className="main-screen-inside">
                <div className="main-screen-text2">
                  <span className="main-screen-text3">
                    <span>掲示板</span>
                  </span>
                </div>
                <img
                  src="/images/keijibanImage.png"
                  alt="Keijiban"
                  className="main-screen-image1"
                />
              </div>
            </button>
            <button className="main-screen-tool-button" onClick={() => navigate('/sign-up')}>
              <div className="main-screen-inside1">
                <div className="main-screen-text5">
                  <span className="main-screen-text6">
                    <span>お話しツール</span>
                  </span>
                </div>
                <img
                  src="/images/toolImage.png"
                  alt="Tool"
                  className="main-screen-image11"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainScreen
