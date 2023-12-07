import React, {useEffect , useState } from 'react'
import { Helmet ,HelmetProvider} from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

import './main-screen.css'

const MainScreen = (props) => {
  const navigate=useNavigate()
  return (
    <HelmetProvider>
      <div className="main-screen-container">
        <Helmet>
          <title>しまコネクト</title>
        </Helmet>
        <div className="main-screen-main-screen">
          <div className="main-screen-header">
            <div className="main-screen-bar-text">
              <button className="main-screen-logo" onClick={() => navigate('/main-screen')}>
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="main-screen-image"
                />
              </button>
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
              <button className="main-screen-internet-forum-button" onClick={() => navigate('/internet-forum-popu')}>
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
              <button className="main-screen-tool-button">
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
    </HelmetProvider>
  )
}

export default MainScreen
