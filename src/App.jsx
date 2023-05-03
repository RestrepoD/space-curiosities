import {useState} from "react";
import {getRandomNumber} from "./utils/getRandomNumber";
import "./App.css";
import phrases from "./assets/phrases.json";
import bg_imgs from "./assets/bg_imgs.json";
import Phrase from "./components/Phrase/phrase";
import Button from "./components/Button/Button";
function App() {
  const getRandomPhrase = () => phrases[getRandomNumber(phrases.length-1)];
  const [phraseObject, setPhraseObject] = useState(getRandomPhrase());
  const getRandomImg = () => bg_imgs[getRandomNumber(bg_imgs.length-1)];
  const [background, setBackground] = useState(getRandomImg());
  function switchPhrase() {
    let newPhrase = getRandomPhrase();
    while (newPhrase === phraseObject) {
      newPhrase = getRandomPhrase();
    }
    setPhraseObject(newPhrase);
  }
  function switchImg() {
    let newBackground = getRandomImg();
    while (newBackground === background) {
      newBackground = getRandomImg();
    }
    setBackground(newBackground);
  }
  function handlerClick() {
    switchPhrase();
    switchImg();
  }
  return (
    <div className="_app_cont" style={{backgroundImage: `url("${background.bg_img}")`}}>
      <h1>INFOGALAX</h1>
      <Phrase phrase={phraseObject.phrase} />
      <div className="s_btn_cont">
        <Button handlerClick={handlerClick} />
      </div>
      <p className="q_cont">Quote from: {phraseObject.author}</p>
    </div>
  )
}
export default App;
