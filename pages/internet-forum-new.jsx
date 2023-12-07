import React, {useEffect , useState } from 'react'
import { Helmet ,HelmetProvider} from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

import './internet-forum.css'

const InternetForumNew = (props) => {
  const navigate=useNavigate()
  return (
    <HelmetProvider>
      <div className="internet-forum-container">
        <Helmet>
          <title>しまコネクト</title>
        </Helmet>
        <div className="internet-forum-internet-forum">
          <div className="internet-forum-header">
            <div className="internet-forum-bar-text">
              <button className="internet-forum-logo" onClick={() => navigate('/main-screen')}>
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="internet-forum-image"
                />
              </button>
              <button className="internet-forum-page-title" onClick={() => navigate('/internet-forum-popu')}>
                <div className="internet-forum-text">
                  <span className="internet-forum-text1">
                    <span>掲示板</span>
                  </span>
                </div>
                <img
                  src="/images/keijibanImage.png"
                  alt="Keijiban"
                  className="internet-forum-image1"
                />
              </button>
              <div className="internet-forum-hambirger-menu">
                <div className="internet-forum-stacked">
                  <img
                    src="/images/hambirger.svg"
                    alt="Ham"
                    className="internet-forum-menu"
                  />
                  <span className="internet-forum-text3">
                    <span>メニュー</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="internet-forum-main">
            <div className="internet-forum-field">
              <div className="internet-forum-tag-button-field">
                <button className="internet-forum-new-button" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="internet-forum-new-title">
                    <span className="internet-forum-text7">
                      <span>人気順</span>
                    </span>
                  </div>
                </button>
                <button className="internet-forum-hot-button" onClick={() => navigate('/internet-forum-new')}>
                  <div className="internet-forum-hot-title">
                    <span className="internet-forum-text5">
                      <span>新規順</span>
                    </span>
                  </div>
                </button>
              </div>
              <div className="internet-forum-cards-field">
                <div className="internet-forum-cards">
                  <img
                    src="/images/cardAlt.png"
                    alt="CardAlt"
                    className="internet-forum-rectangle11"
                  />
                  <img
                    src="/images/cardAlt.png"
                    alt="CardAlt"
                    className="internet-forum-rectangle11"
                  />
                  <img
                    src="/images/cardAlt.png"
                    alt="CardAlt"
                    className="internet-forum-rectangle11"
                  />
                  <img
                    src="/images/cardAlt.png"
                    alt="CardAlt"
                    className="internet-forum-rectangle11"
                  />
                  <img
                    src="/images/cardAlt.png"
                    alt="CardAlt"
                    className="internet-forum-rectangle11"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="internet-forum-button">
          <button className="internet-forum-search-button" onClick={() => navigate('/refine-search')}>
            <img
              src="/images/searchIcon.svg"
              alt="searchIcon"
              className="internet-forum-search"
            />
          </button>
          <button className="internet-forum-add-button" onClick={() => navigate('/add-hand-sign')}>
            <img
              src="/images/addIcon.svg"
              alt="addIcon"
              className="internet-forum-add"
            />
          </button>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default InternetForumNew
