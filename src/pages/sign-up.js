import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import './sign-up.css'

const SignUp = (props) => {
  const navigate=useNavigate()
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>コンテンツ名</title>
      </Helmet>
      <div className="sign-up-sign-up">
        <div className="sign-up-main">
          <div className="sign-up-title">
            <div className="sign-up-text">
              <span className="sign-up-text01">
                <span>新規登録</span>
              </span>
            </div>
            <div className="sign-up-image">
              <img
                src="/images/signUpShima.png"
                alt="signUp"
                className="sign-up-image1"
              />
            </div>
          </div>
          <div className="sign-up-input-area">
            <div className="sign-up-text-field">
              <div className="sign-up-frame-input-label">
                <span className="sign-up-text03">
                  <span>お名前</span>
                </span>
                <div className="sign-up-requirement">
                  <span className="sign-up-text05">
                    <span>必須</span>
                  </span>
                </div>
              </div>
              <div className="sign-up-support-text">
                <span className="sign-up-text07">
                  <span>ニックネームでも可。</span>
                </span>
              </div>
              <input type="text" placeholder className="sign-up-input" />
            </div>
            <div className="sign-up-id">
              <div className="sign-up-frame-input-label1">
                <span className="sign-up-text09">
                  <span>ID</span>
                </span>
                <div className="sign-up-requirement1">
                  <span className="sign-up-text11">
                    <span>必須</span>
                  </span>
                </div>
              </div>
              <div className="sign-up-support-text1">
                <span className="sign-up-text13">
                  <span>半角英数字で回答してください。</span>
                </span>
              </div>
              <input type="text" placeholder className="sign-up-input1" />
            </div>
            <div className="sign-up-gender">
              <div className="sign-up-label">
                <span className="sign-up-text15">
                  <span>性別</span>
                </span>
              </div>
              <div className="sign-up-radio">
                <div className="sign-up-radiodefault">
                  <input className="sign-up-radiobutton" type="radio" name="gender"></input>
                  <span className="sign-up-text17">
                    <span>男性</span>
                  </span>
                </div>
                <div className="sign-up-radiodefault1">
                  <input className="sign-up-radiobutton1" type="radio" name="gender"></input>
                  <span className="sign-up-text19">
                    <span>女性</span>
                  </span>
                </div>
                <div className="sign-up-radiodefault2">
                  <input className="sign-up-radiobutton2" type="radio" name="gender"></input>
                  <span className="sign-up-text21">
                    <span>無回答・その他</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="sign-up-pass-word">
              <div className="sign-up-frame-input-label2">
                <span className="sign-up-text23">
                  <span>パスワード</span>
                </span>
                <div className="sign-up-requirement2">
                  <span className="sign-up-text25">
                    <span>必須</span>
                  </span>
                </div>
              </div>
              <div className="sign-up-support-text2">
                <span className="sign-up-text27">
                  <span>半角英数字で入力してください。</span>
                </span>
              </div>
              <input className="sign-up-input2" type="text"></input>
            </div>
            <div className="sign-up-pass-word2">
              <div className="sign-up-frame-input-label3">
                <span className="sign-up-text29">
                  <span>パスワード確認用</span>
                </span>
                <div className="sign-up-requirement3">
                  <span className="sign-up-text31">
                    <span>必須</span>
                  </span>
                </div>
              </div>
              <div className="sign-up-support-text3">
                <span className="sign-up-text33">
                  <span>確認のため再度入力してください。</span>
                </span>
              </div>
              <input className="sign-up-input3" type="text"></input>
            </div>
          </div>
          <div className="sign-up-button-field">
            <button className="sign-up-resist-button" onClick={() => navigate('/sign-up-completed')}>
              <span className="sign-up-text35">
                <span>登録する</span>
              </span>
            </button>
            <button className="sign-up-back-button" onClick={() => navigate('/registration-for-use')}>
              <span className="sign-up-text37">
                <span>戻る</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp
