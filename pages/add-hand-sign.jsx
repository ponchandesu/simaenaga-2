import React, {useEffect , useState } from 'react'
import { Helmet ,HelmetProvider} from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import './add-hand-sign.css'

const AddHandSign = (props) => {
  const initialValues = { handSignName:"", handSignVideo:"", handSignImage:"", category:"", detail:"", hashTag1:"", hashTag2:"", hashTag3:"", hashTag4:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErros, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);   
  const navigate=useNavigate();

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]:value});
    console.log('Change:',formValues);
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    // setFormErrors(validate(formValues));
    const res = await axios.post('http://localhost:5000/hands', formValues)
    setIsSubmit(true);
    console.log('Submit:',formValues);
  };

  useEffect(() => {
    console.log(formErros);
    //エラーなしでかつ送信されているなら。
    if (Object.keys(formErros).length === 0 && isSubmit) {
      console.log(formValues);
    } else {
    }
  }, [formErros]);

  return (
    <HelmetProvider>
      <div className="registration-container">
        <Helmet>
          <title>しまコネクト</title>
        </Helmet>
        <div className="registration-registration">
          <div className="registration-header">
            <div className="registration-bar-text">
              <button className="registration-logo" onClick={() => navigate('/main-screen')}>
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="registration-image"
                />
              </button>
              <button className="registration-page-title" onClick={() => navigate('/internet-forum-popu')}>
                <div className="registration-text">
                  <span className="registration-text01">
                    <span>掲示板</span>
                  </span>
                </div>
                <img
                  src="/images/keijibanImage.png"
                  alt="Keijiban"
                  className="registration-image1"
                />
              </button>
              <div className="registration-hambirger-menu">
                <div className="registration-stacked">
                  <img
                    src="/images/hambirger.svg"
                    alt="Ham"
                    className="registration-menu"
                  />
                  <span className="registration-text03">
                    <span>メニュー</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data" className="registration-main">
            <div className="registration-registration-title">
              <span className="registration-text05">
                <span>ハンドサイン投稿</span>
              </span>
            </div>
            <div className="registration-input-area">
              <div className="registration-hand-sign-name">
                <div className="registration-frame-input-label">
                  <span className="registration-text07">
                    <span>ハンドサインの名前</span>
                  </span>
                  <div className="registration-requirement">
                    <span className="registration-text09">
                      <span>必須</span>
                    </span>
                  </div>
                </div>
                <input 
                  type="text" 
                  name="handSignName"
                  value={formValues.handSignName}
                  onChange={(e) => handleChange(e)}
                  className="registration-input" 
                />
              </div>
              <div className="registration-hand-sign-image">
                <div className="registration-frame-input-label">
                  <span className="registration-text07">
                    <span>ハンドサインの動画データ</span>
                  </span>
                  <div className="registration-requirement">
                    <span className="registration-text09">
                      <span>必須</span>
                    </span>
                  </div>
                </div>
                <div className="registration-support-text">
                  <span className="registration-text22">
                    <span>ハンドサインの動画をアップロードしてください。</span>
                  </span>
                </div>
                <input type="file" name="handSignVideo" value={formValues.handSignVideo} onChange={(e) => handleChange(e)} accept="video/*" className="registration-image-button" />
              </div>
              <div className="registration-hand-sign-image">
                <div className="registration-frame-input-label">
                  <span className="registration-text07">
                    <span>サムネイル画像</span>
                  </span>
                  <div className="registration-requirement">
                    <span className="registration-text09">
                      <span>必須</span>
                    </span>
                  </div>
                </div>
                <div className="registration-support-text">
                  <span className="registration-text22">
                    <span>ハンドサインを表す画像をアップロードしてください。</span>
                  </span>
                </div>
                <input type="file" name="handSignImage" value={formValues.handSignImage} onChange={(e) => handleChange(e)} accept="image/*" className="registration-image-button" />
              </div>
              <div className="registration-category">
                <div className="registration-frame-input-label1">
                  <span className="registration-text11">
                    <span>カテゴリー</span>
                  </span>
                  <div className="registration-requirement1">
                    <span className="registration-text13">
                      <span>必須</span>
                    </span>
                  </div>
                </div>
                <div className="sign-up-radio-dairy">
                  <div className="sign-up-radiodefault">
                    <span className="sign-up-text18">
                      <span>日常</span>
                    </span>
                    <div className="sign-up-radio-group">
                      <input 
                        className="sign-up-radiobutton" 
                        type="radio" 
                        name="category" 
                        value="dairyGreeting" 
                        checked={formValues.category === "dairyGreeting"} 
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="sign-up-text17">
                        <span>挨拶</span>
                      </span>
                    </div>
                    <div className="sign-up-radio-group">
                      <input 
                        className="sign-up-radiobutton" 
                        type="radio" 
                        name="category" 
                        value="dairySchool" 
                        checked={formValues.category === "dairySchool"} 
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="sign-up-text17">
                        <span>学校</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sign-up-radio-dairy">
                  <div className="sign-up-radiodefault">
                    <span className="sign-up-text18">
                      <span>音楽</span>
                    </span>
                    <div className="sign-up-radio-group">
                      <input 
                        className="sign-up-radiobutton" 
                        type="radio" 
                        name="category" 
                        value="musicJPop" 
                        checked={formValues.category === "musicJPop"} 
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="sign-up-text17">
                        <span>邦楽</span>
                      </span>
                    </div>
                    <div className="sign-up-radio-group">
                      <input 
                        className="sign-up-radiobutton" 
                        type="radio" 
                        name="category" 
                        value="musicWestern" 
                        checked={formValues.category === "musicWestern"} 
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="sign-up-text17">
                        <span>洋楽</span>
                      </span>
                    </div>
                    <div className="sign-up-radio-group">
                      <input 
                        className="sign-up-radiobutton" 
                        type="radio" 
                        name="category" 
                        value="musicKPop" 
                        checked={formValues.category === "musicKPop"} 
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="sign-up-text17">
                        <span>K-POP</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sign-up-radio-dairy">  
                  <div className="sign-up-radiodefault">
                    <span className="sign-up-text18">
                      <span>アニメ</span>
                    </span>
                    <div className="sign-up-radio-group">
                      <input 
                        className="sign-up-radiobutton" 
                        type="radio" 
                        name="category" 
                        value="animeSF" 
                        checked={formValues.category === "animeSF"} 
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="sign-up-text17">
                        <span>SF</span>
                      </span>
                    </div>
                    <div className="sign-up-radio-group">
                      <input 
                        className="sign-up-radiobutton" 
                        type="radio" 
                        name="category" 
                        value="animeBattle" 
                        checked={formValues.category === "animeBattle"} 
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="sign-up-text17">
                        <span>バトル</span>
                      </span>
                    </div>
                    <div className="sign-up-radio-group">
                      <input 
                        className="sign-up-radiobutton" 
                        type="radio" 
                        name="category" 
                        value="animeLove" 
                        checked={formValues.category === "animeLove"} 
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="sign-up-text17">
                        <span>恋愛</span>
                      </span>
                    </div>
                    <div className="sign-up-radio-group">
                      <input 
                        className="sign-up-radiobutton" 
                        type="radio" 
                        name="category" 
                        value="animeDairy" 
                        checked={formValues.category === "animeDairy"} 
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="sign-up-text17">
                        <span>日常</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sign-up-radio-dairy">
                  <div className="sign-up-radiodefault">
                    <span className="sign-up-text18">
                      <span>ゲーム</span>
                    </span>
                    <div className="sign-up-radio-group">
                      <input 
                        className="sign-up-radiobutton" 
                        type="radio" 
                        name="category" 
                        value="gameConsumer" 
                        checked={formValues.category === "gameConsumer"} 
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="sign-up-text17">
                        <span>コンシューマー</span>
                      </span>
                    </div>
                    <div className="sign-up-radio-group">
                      <input 
                        className="sign-up-radiobutton" 
                        type="radio" 
                        name="category" 
                        value="gameSmartPhone" 
                        checked={formValues.category === "gameSmartPhone"} 
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="sign-up-text17">
                        <span>スマホ</span>
                      </span>
                    </div>
                    <div className="sign-up-radio-group">
                      <input 
                        className="sign-up-radiobutton" 
                        type="radio" 
                        name="category" 
                        value="gamePC" 
                        checked={formValues.category === "gamePC"} 
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="sign-up-text17">
                        <span>PC</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sign-up-radio-dairy">
                  <div className="sign-up-radiodefault">
                    <span className="sign-up-text18">
                      <span>ドラマ</span>
                    </span>
                    <div className="sign-up-radio-group">
                      <input 
                        className="sign-up-radiobutton" 
                        type="radio" 
                        name="category" 
                        value="dramaJapan" 
                        checked={formValues.category === "dramaJapan"} 
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="sign-up-text17">
                        <span>日本</span>
                      </span>
                    </div>
                    <div className="sign-up-radio-group">
                      <input 
                        className="sign-up-radiobutton" 
                        type="radio" 
                        name="category" 
                        value="dramaForeign" 
                        checked={formValues.category === "dramaForeign"} 
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="sign-up-text17">
                        <span>海外</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="registration-detail">
                <span className="registration-frame-input-label2">
                    <span>詳細</span>
                </span>
                <textarea type="text" placeholder className="registration-input1" />
                <div className="registration-count">
                  <div className="registration-letter-counter">
                    <span className="registration-text18">0</span>
                    <span className="registration-text19">/</span>
                    <span className="registration-text20">
                      <span>150</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="registration-hash-tags">
                <span className="registration-frame-input-label3">
                  <span>ハッシュタグ</span>
                </span>
                <div className="registration-support-text">
                  <span className="registration-text22">
                    <span>最大4個まで設定可能です。</span>
                  </span>
                </div>
                <input 
                  className="registration-input2" 
                  type="text"
                  name="hashTag1"
                  value={formValues.hashTag1}
                  onChange={(e) => handleChange(e)}
                />
                <div className="registration-count1">
                  <div className="registration-letter-counter1">
                    <span className="registration-text24">0</span>
                    <span className="registration-text25">/</span>
                    <span className="registration-text26">
                      <span>20</span>
                    </span>
                  </div>
                </div>
                <input 
                  className="registration-input2" 
                  type="text"
                  name="hashTag2"
                  value={formValues.hashTag2}
                  onChange={(e) => handleChange(e)}
                />
                <div className="registration-count2">
                  <div className="registration-letter-counter2">
                    <span className="registration-text28">0</span>
                    <span className="registration-text29">/</span>
                    <span className="registration-text30">
                      <span>20</span>
                    </span>
                  </div>
                </div>
                <input 
                  className="registration-input2" 
                  type="text"
                  name="hashTag3"
                  value={formValues.hashTag3}
                  onChange={(e) => handleChange(e)}
                />
                <div className="registration-count3">
                  <div className="registration-letter-counter3">
                    <span className="registration-text32">0</span>
                    <span className="registration-text33">/</span>
                    <span className="registration-text34">
                      <span>20</span>
                    </span>
                  </div>
                </div>
                <input 
                  className="registration-input2" 
                  type="text"
                  name="hashTag4"
                  value={formValues.hashTag4}
                  onChange={(e) => handleChange(e)}
                />
                <div className="registration-count4">
                  <div className="registration-letter-counter4">
                    <span className="registration-text36">0</span>
                    <span className="registration-text37">/</span>
                    <span className="registration-text38">
                      <span>20</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="registration-button-field">
              <button className="registration-resist-button" type="submit" onClick={() => navigate('/internet-forum-popu')}>
                <span className="registration-text40">
                  <span>投稿する</span>
                </span>
              </button>
              <button className="registration-back-button" onClick={() => navigate('/internet-forum-popu')}>
                <span className="registration-text42">
                  <span>掲示板に戻る</span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default AddHandSign