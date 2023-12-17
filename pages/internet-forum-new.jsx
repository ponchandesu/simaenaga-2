import React, {useEffect , useState } from 'react'
import { Helmet ,HelmetProvider} from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { server } from '../App';
import './internet-forum.css'

const InternetForumNew = (props) => {
  const navigate=useNavigate()
  useEffect(() => {

    // オーバレイを開閉する関数
    const overlay = document.getElementById('sub-menu');
    function overlayToggle() {
      overlay.classList.toggle('submenu-on');
    }

    // 指定した要素に対して上記関数を実行するクリックイベントを設定
    const clickArea = document.getElementsByClassName('main-screen-hambirger-menu');
    for (let i = 0; i < clickArea.length; i++) {
      clickArea[i].addEventListener('click', overlayToggle, false);
    }

    // イベントに対してバブリングを停止
    function stopEvent(event) {
      event.stopPropagation();
    }
    const overlayInner = document.getElementById('sub-menu-main');
    overlayInner.addEventListener('click', stopEvent, false);

    // cleanup 関数でイベントリスナーを削除
    return () => {
      for (let i = 0; i < clickArea.length; i++) {
        clickArea[i].removeEventListener('click', overlayToggle, false);
      }
      overlayInner.removeEventListener('click', stopEvent, false);
    };
  }, []); // 第二引数に空の配列を渡すことで、マウント時のみ実行

  // close-btn ボタンのクリックイベントハンドラを追加
  const handleCloseBtnClick = () => {
    const overlay = document.getElementById('sub-menu');
    overlay.classList.remove('submenu-on');
  };

  //サブメニューのプロフィールクリックイベント
  const handleProfileBtnClick = () => {
    navigate('/profile');
  }

  //サブメニューのハンドサインクリックイベント
  const handleHandsignBtnClick = () => {
    navigate('/hand-sign-list');
  }

  //サブメニューのログアウトクリックイベント
  const handleLogoutBtnClick = () => {
    navigate('/log-out');
  }

  //サブメニューのサインアウトクリックイベント
  const handleSignoutBtnClick = () => {
    navigate('/account-delete');
  }

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
              <button id="open-btn" className="main-screen-hambirger-menu" type="button">
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
              </button>
              <div id="sub-menu" className="sub-menu-sub-menu">
                <div id="sub-menu-main">
                  <div className="sub-menu-sub-menu1">
                    <span className="sub-menu-text">
                      <span>  サブメニュー</span>
                    </span>
                  </div>
                </div>
                <button id="close-btn" className="sub-menu-close-button" type="button" onClick={handleCloseBtnClick}>
                  <img
                    src="/images/closeIcon.svg"
                    alt="close"
                    className="sub-menu-close"
                  />
                </button>
                <button className="sub-menu-profile" onClick={handleProfileBtnClick}>
                  <div className="sub-menu-me">
                    <img
                      src="/images/profileIcon.svg"
                      alt="profileIcon"
                      className="sub-menu-union"
                    />
                  </div>
                  <span className="sub-menu-text02">
                    <span>プロフィール</span>
                  </span>
                </button>
                <button className="sub-menu-hand-sign-list" onClick={handleHandsignBtnClick}>
                  <div className="sub-menu-fillablecard">
                    <img
                      src="/images/handSignIcon.svg"
                      alt="handSignIcon"
                      className="sub-menu-union1"
                    />
                  </div>
                  <span className="sub-menu-text04">
                    <span>ハンドサインリスト</span>
                  </span>
                </button>
                <button className="sub-menu-log-out" onClick={handleLogoutBtnClick}>
                  <div className="sub-menu-update">
                    <img
                      src="/images/logOutIcon.svg"
                      alt="logOutIcon"
                      className="sub-menu-union2"
                    />
                  </div>
                  <span className="sub-menu-text06">
                    <span>ログアウト</span>
                  </span>
                </button>
                <button className="sub-menu-sign-out" onClick={handleSignoutBtnClick}>
                  <div className="sub-menu-departure">
                    <img
                      src="/images/signOutIcon.svg"
                      alt="signOutIcon"
                      className="sub-menu-union3"
                    />
                  </div>
                  <span className="sub-menu-text08">
                    <span>退会手続き</span>
                  </span>
                </button>
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
