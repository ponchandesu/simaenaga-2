import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import './start-scene.css'

const StartScene = (props) => {
  const navigate=useNavigate()
  return (
    <div className="start-scene-container">
      <Helmet>
        <title>コンテンツ名</title>
      </Helmet>
      <div className="start-scene-start-scene">
        <div className="start-scene-main">
          <div className="start-scene-title">
            <span className="start-scene-text">
              <span>コンテンツ名</span>
            </span>
          </div>
          <img
            src="/images/titleImage.png"
            alt="titleImage"
            className="start-scene-image1"
          />
          <div className="start-scene-button">
            <button className="start-scene-secondary" onClick={() => navigate('/registration-for-use')}>
              <span className="start-scene-text2">
                <span>はじめる</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartScene;