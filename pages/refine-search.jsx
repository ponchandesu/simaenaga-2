import React, {useEffect , useState } from 'react'
import { Helmet ,HelmetProvider} from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

import './refine-search.css'
const RefineSearch = (props) => {
  const navigate=useNavigate()
  
  return (
    <HelmetProvider>
      <div className="refine-search-container">
        <Helmet>
          <title>しまコネクト</title>
        </Helmet>
        <div className="refine-search-refine-search">
          <div className="refine-search-header">
            <div className="refine-search-bar-text">
              <button className="refine-search-logo" onClick={() => navigate('/main-screen')}>
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="refine-search-image"
                />
              </button>
              <button className="refine-search-page-title" onClick={() => navigate('/internet-forum-popu')}>
                <div className="refine-search-text">
                  <span className="refine-search-text01">
                    <span>掲示板</span>
                  </span>
                </div>
                <img
                  src="/images/keijibanImage.png"
                  alt="Keijiban"
                  className="refine-search-image1"
                />
              </button>
              <div className="refine-search-hambirger-menu">
                <div className="refine-search-stacked">
                  <img
                    src="/images/hambirger.svg"
                    alt="Ham"
                    className="refine-search-menu"
                  />
                  <span className="refine-search-text03">
                    <span>メニュー</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="refine-search-main">
            <div className="refine-search-research-title">
              <span className="refine-search-text05">
                <span>カテゴリー検索</span>
              </span>
            </div>
            <div className="refine-search-tag-field">
              <div className="refine-search-dairy">
                <div className="refine-search-search-content">
                  <div className="refine-search-category-title">
                    <span className="refine-search-text07">
                      <span>日常</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="component2-dairy-greeting">
                <button className="component2-search-content" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="component2-category-title">
                    <span className="component2-text">
                      <span>挨拶</span>
                    </span>
                  </div>
                  <div className="component2-number">
                    <img
                      src="/images/fileIcon.svg"
                      alt="File"
                      className="component2-documents"
                    />
                    <div className="component2-text02">
                      <span className="component2-text03">
                        <span>40</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="component2-school">
                <button className="component2-search-content" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="component2-category-title01">
                    <span className="component2-text05">
                      <span>学校</span>
                    </span>
                  </div>
                  <div className="component2-number01">
                    <img
                      src="/images/fileIcon.svg"
                      alt="documents4427"
                      className="component2-documents01"
                    />
                    <div className="component2-text07">
                      <span className="component2-text08">
                        <span>40</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="refine-search-music">
                <div className="refine-search-search-content1">
                  <div className="refine-search-category-title1">
                    <span className="refine-search-text09">
                      <span>音楽</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="component2-japanese-music">
                <button className="component2-search-content" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="component2-category-title09">
                    <span className="component2-text45">
                      <span>邦楽</span>
                    </span>
                  </div>
                  <div className="component2-number09">
                    <img
                      src="/images/fileIcon.svg"
                      alt="documents4428"
                      className="component2-documents09"
                    />
                    <div className="component2-text47">
                      <span className="component2-text48">
                        <span>40</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="component2-western-music">
                <button className="component2-search-content" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="component2-category-title10">
                    <span className="component2-text50">
                      <span>洋楽</span>
                    </span>
                  </div>
                  <div className="component2-number10">
                    <img
                      src="/images/fileIcon.svg"
                      alt="documents4428"
                      className="component2-documents10"
                    />
                    <div className="component2-text52">
                      <span className="component2-text53">
                        <span>40</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="component2-k-pop">
                <button className="component2-search-content" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="component2-category-title11">
                    <span className="component2-text55">
                      <span>K-POP</span>
                    </span>
                  </div>
                  <div className="component2-number11">
                    <img
                      src="/images/fileIcon.svg"
                      alt="documents4428"
                      className="component2-documents11"
                    />
                    <div className="component2-text57">
                      <span className="component2-text58">
                        <span>40</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="refine-search-anime">
                <div className="refine-search-search-content2">
                  <div className="refine-search-category-title2">
                    <span className="refine-search-text11">
                      <span>アニメ</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="component2-sf">
                <button className="component2-search-content" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="component2-category-title02">
                    <span className="component2-text10">
                      <span>SF</span>
                    </span>
                  </div>
                  <div className="component2-number02">
                    <img
                      src="/images/fileIcon.svg"
                      alt="documents4427"
                      className="component2-documents02"
                    />
                    <div className="component2-text12">
                      <span className="component2-text13">
                        <span>40</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="component2-battle">
                <button className="component2-search-content" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="component2-category-title03">
                    <span className="component2-text15">
                      <span>バトル</span>
                    </span>
                  </div>
                  <div className="component2-number03">
                    <img
                      src="/images/fileIcon.svg"
                      alt="documents4427"
                      className="component2-documents03"
                    />
                    <div className="component2-text17">
                      <span className="component2-text18">
                        <span>40</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="component2-love">
                <button className="component2-search-content" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="component2-category-title04">
                    <span className="component2-text20">
                      <span>恋愛</span>
                    </span>
                  </div>
                  <div className="component2-number04">
                    <img
                      src="/images/fileIcon.svg"
                      alt="documents4427"
                      className="component2-documents04"
                    />
                    <div className="component2-text22">
                      <span className="component2-text23">
                        <span>40</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="component2-dairy">
                <button className="component2-search-content" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="component2-category-title05">
                    <span className="component2-text25">
                      <span>日常</span>
                    </span>
                  </div>
                  <div className="component2-number05">
                    <img
                      src="/images/fileIcon.svg"
                      alt="documents4427"
                      className="component2-documents05"
                    />
                    <div className="component2-text27">
                      <span className="component2-text28">
                        <span>40</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="refine-search-game">
                <div className="refine-search-search-content3">
                  <div className="refine-search-category-title3">
                    <span className="refine-search-text13">
                      <span>ゲーム</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="component2-consumer">
                <button className="component2-search-content" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="component2-category-title06">
                    <span className="component2-text30">
                      <span>コンシューマー</span>
                    </span>
                  </div>
                  <div className="component2-number06">
                    <img
                      src="/images/fileIcon.svg"
                      alt="documents4427"
                      className="component2-documents06"
                    />
                    <div className="component2-text32">
                      <span className="component2-text33">
                        <span>40</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="component2-smart-phone">
                <button className="component2-search-content" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="component2-category-title07">
                    <span className="component2-text35">
                      <span>スマホ</span>
                    </span>
                  </div>
                  <div className="component2-number07">
                    <img
                      src="/images/fileIcon.svg"
                      alt="documents4427"
                      className="component2-documents07"
                    />
                    <div className="component2-text37">
                      <span className="component2-text38">
                        <span>40</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="component2-pc">
                <button className="component2-search-content" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="component2-category-title08">
                    <span className="component2-text40">
                      <span>PC</span>
                    </span>
                  </div>
                  <div className="component2-number08">
                    <img
                      src="/images/fileIcon.svg"
                      alt="documents4428"
                      className="component2-documents08"
                    />
                    <div className="component2-text42">
                      <span className="component2-text43">
                        <span>40</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="refine-search-drama">
                <div className="refine-search-search-content4">
                  <div className="refine-search-category-title4">
                    <span className="refine-search-text15">
                      <span>ドラマ</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="component2-japanese-drama">
                <button className="component2-search-content" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="component2-category-title12">
                    <span className="component2-text60">
                      <span>日本</span>
                    </span>
                  </div>
                  <div className="component2-number12">
                    <img
                      src="/images/fileIcon.svg"
                      alt="documents4428"
                      className="component2-documents12"
                    />
                    <div className="component2-text62">
                      <span className="component2-text63">
                        <span>40</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="component2-foreign-drama">
                <button className="component2-search-content" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="component2-category-title13">
                    <span className="component2-text65">
                      <span>海外</span>
                    </span>
                  </div>
                  <div className="component2-number13">
                    <img
                      src="/images/fileIcon.svg"
                      alt="documents4428"
                      className="component2-documents13"
                    />
                    <div className="component2-text67">
                      <span className="component2-text68">
                        <span>40</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="refine-search-button-field">
              <button className="refine-search-button" onClick={() => navigate('/internet-forum-popu')}>
                <span className="refine-search-text17">
                  <span>設定をリセットする</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default RefineSearch
