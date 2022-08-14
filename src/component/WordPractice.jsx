import { useState } from "react";

const WordPractice = (props) => {
  const wordListArrayTemp = props.wordList
  .replace(/[\r\n]/g, " ")
  .trim();
  const wordListArray= wordListArrayTemp.split(" ").filter(w=>(w!== ''));
  const [word, setWord] = useState('开始');
  const [wordIndex, setWordIndex] = useState(0);
  
  const getRandomWord = () => {
   const selectedWord =
     wordListArray[Math.floor(Math.random() * wordListArray.length)];
    setWord(selectedWord);
  }

  const getNormalWord =() =>{
    const selectedWord = wordListArray[wordIndex];
    setWordIndex(wordIndex+1);
    if (wordIndex === wordListArray.length-1) setWordIndex(0);
    setWord(selectedWord);
  }  
    return (
      <div className="App">
        <header className="App-header">
          <p className="wordContent">{word}</p>
          <div className="mb-3">
            <button className="btn btn-primary m-3" onClick={getNormalWord}>
              顺序练习
            </button>
            <button className="btn btn-primary m-3" onClick={getRandomWord}>
              随机练习
            </button>
          </div>
        </header>
      </div>
    );

}
 
export default WordPractice;