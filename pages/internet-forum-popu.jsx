import React, {useEffect , useState } from 'react'
import { Helmet ,HelmetProvider} from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { server } from '../App';
import './internet-forum.css'

function InternetForumPopu() {

  async function getImage(image){
    const res = await axios.post('forum-image',image);
    return res;
  }
  const navigate=useNavigate()
  const [list,setList] = useState([])
  useEffect(() => {

    async function board(){
      try {
        const res = await axios.get(server+"/forum-popu"); 
        setList(res.data); 
        console.log(res.data); 
      } catch (error) {
        console.error(error); 
      }
    }
    board();
    
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

                  {list.map((card)=>(
                  <div className="hand-sign-cards-hand-sign-cards">
                    <div className="hand-sign-cards-title">
                      <div className="hand-sign-cards-user-data">
                        <img
                          src="/images/userIcon.png"
                          alt="UserIcon"
                          className="hand-sign-cards-icon"
                          id={card.userId}
                        />
                        <div className="hand-sign-cards-user-name">
                          <span className="hand-sign-cards-text">{card.userId}</span>
                        </div>
                      </div>
                      <div className="hand-sign-cards-date">
                        <span className="hand-sign-cards-text02">
                          <span>{card.time}</span>
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
                            <span>{card.title}</span>
                          </span>
                        </div>
                        <div className="hand-sign-cards-text-field">
                          <div className="hand-sign-cards-detail">
                            <span className="hand-sign-cards-text08">
                              <span>{card.body}</span>
                            </span>
                          </div>
                          <div className="hand-sign-cards-hash-tags">
                            <button className="hand-sign-cards-hash-tag"  onClick={() => navigate('/internet-forum-popu')}>
                              <span className="hand-sign-cards-text12"> 
                                <span>{card.hashtag1 != null&& '#'+card.hashtag1}</span>
                              </span>
                            </button>
                            <button className="hand-sign-cards-hash-tag"  onClick={() => navigate('/internet-forum-popu')}>
                              <span className="hand-sign-cards-text12">
                                <span>{card.hashtag2 != null&& '#'+card.hashtag2}</span>
                              </span>
                            </button>
                            <button className="hand-sign-cards-hash-tag"  onClick={() => navigate('/internet-forum-popu')}>
                              <span className="hand-sign-cards-text12">
                                <span>{card.hashtag3 != null&& '#'+card.hashtag3}</span>
                              </span>
                            </button>
                            <button className="hand-sign-cards-hash-tag"  onClick={() => navigate('/internet-forum-popu')}>
                              <span className="hand-sign-cards-text12">
                                <span>{card.hashtag4 != null&& '#'+card.hashtag4}</span>
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
                            <input 
                              type="checkbox" 
                              id="heart01"
                              src="/images/activeHeart.svg"
                              alt="activeHeart"
                              className="hand-sign-cards-activeHeart"
                            />
                            <label htmlFor="heart01"
                              src="/images/heart.svg"
                              alt="heart"
                              className="hand-sign-cards-Heart"
                            />
                          </div>
                          <div className="hand-sign-cards-text36">
                            <span className="hand-sign-cards-text37">
                              <span>{card.fav}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}     
                  
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
