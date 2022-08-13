import { useState } from "react";

const WordPractice = (props) => {
  console.log(props.wordList);
  const wordListArray=props.wordList.trim().split(" ");
  const [word, setWord] = useState('开始');
  
  const getRandomInt = () => {
   const selectedWord =
     wordListArray[Math.floor(Math.random() * wordListArray.length)];
    setWord(selectedWord);
  }

    return (
      <div className="App">
        <header className="App-header">
          <p className="wordContent">{word}</p>
          <button className="btn btn-primary" onClick={getRandomInt}>
            换一个字
          </button>
        </header>
      </div>
    );

}
 
export default WordPractice;