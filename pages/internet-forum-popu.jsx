import React, {useEffect , useState } from 'react'
import { Helmet ,HelmetProvider} from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

import './internet-forum.css'

const InternetForumPopu = (props) => {
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
                <button className="internet-forum-hot-button" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="internet-forum-hot-title">
                    <span className="internet-forum-text5">
                      <span>人気順</span>
                    </span>
                  </div>
                </button>
                <button className="internet-forum-new-button" onClick={() => navigate('/internet-forum-new')}>
                  <div className="internet-forum-new-title">
                    <span className="internet-forum-text7">
                      <span>新規順</span>
                    </span>
                  </div>
                </button>
              </div>
              <div className="internet-forum-cards-field">
                <div className="internet-forum-cards">
                  <div className="hand-sign-cards-hand-sign-cards">
                    <div className="hand-sign-cards-title">
                      <div className="hand-sign-cards-user-data">
                        <img
                          src="/images/userIcon.png"
                          alt="UserIcon"
                          className="hand-sign-cards-icon"
                        />
                        <div className="hand-sign-cards-user-name">
                          <span className="hand-sign-cards-text">あかり</span>
                        </div>
                      </div>
                      <div className="hand-sign-cards-date">
                        <span className="hand-sign-cards-text02">
                          <span>2023-09-04</span>
                        </span>
                      </div>
                    </div>
                    <div className="hand-sign-cards-contents-field">
                      <div className="hand-sign-cards-image-field">
                        <img
                          src="/images/handSignCardImage.svg"
                          alt="HandSignImage"
                          className="hand-sign-cards-image"
                        />
                      </div>
                      <div className="hand-sign-cards-contents">
                        <div className="hand-sign-cards-hand-sign-name">
                          <span className="hand-sign-cards-text04">
                            <span>こんにちは</span>
                          </span>
                        </div>
                        <div className="hand-sign-cards-text-field">
                          <div className="hand-sign-cards-detail">
                            <span className="hand-sign-cards-text08">
                              <span>こんにちはを作ってみました</span>
                            </span>
                          </div>
                          <div className="hand-sign-cards-hash-tags">
                            <button className="hand-sign-cards-hash-tag"  onClick={() => navigate('/internet-forum-popu')}>
                              <span className="hand-sign-cards-text12">
                                <span>#こんにちは</span>
                              </span>
                            </button>
                            <button className="hand-sign-cards-hash-tag"  onClick={() => navigate('/internet-forum-popu')}>
                              <span className="hand-sign-cards-text12">
                                <span>#やっほー</span>
                              </span>
                            </button>
                            <button className="hand-sign-cards-hash-tag"  onClick={() => navigate('/internet-forum-popu')}>
                              <span className="hand-sign-cards-text12">
                                <span>#駄作</span>
                              </span>
                            </button>
                            <button className="hand-sign-cards-hash-tag"  onClick={() => navigate('/internet-forum-popu')}>
                              <span className="hand-sign-cards-text12">
                                <span>#初心者</span>
                              </span>
                            </button>
                            <button className="hand-sign-cards-hash-tag"  onClick={() => navigate('/internet-forum-popu')}>
                              <span className="hand-sign-cards-text12">
                                <span>#初投稿</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="hand-sign-cards-right">
                        <div className="hand-sign-cards-pan-kuzu">
                          <button className="hand-sign-cards-dairy" onClick={() => navigate('/internet-forum-popu')}>
                            <span className="hand-sign-cards-text32">
                              <span>日常</span>
                            </span>
                          </button>
                          <img
                            src="/images/pankuzuArrow.svg"
                            alt="Arrow"
                            className="hand-sign-cards-arrowright"
                          />
                          <button className="hand-sign-cards-greeting" onClick={() => navigate('/internet-forum-popu')}>
                            <span className="hand-sign-cards-text34">
                              <span>挨拶</span>
                            </span>
                          </button>
                        </div>
                        <div className="hand-sign-cards-favorite-count">
                          <div className="hand-sign-cards-favorite">
                            <input type="checkbox" id="heart01"
                              src="/images/activeHeart.svg"
                              alt="activeHeart"
                              className="hand-sign-cards-activeHeart"
                            />
                            <label for="heart01"
                              src="/images/heart.svg"
                              alt="heart"
                              className="hand-sign-cards-Heart"
                            />
                          </div>
                          <div className="hand-sign-cards-text36">
                            <span className="hand-sign-cards-text37">
                              <span>130</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default InternetForumPopu
