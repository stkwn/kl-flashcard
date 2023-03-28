import { useState } from "react";
import styled from "styled-components";
import {formatStringtoArray} from '../utils/helpers';

const WordPractice = (props) => {
  let wordListArray =formatStringtoArray(props.wordList);
  const [word, setWord] = useState(wordListArray[0]);
  const [wordIndex, setWordIndex] = useState(0);
  
  const getRandomWord = () => {
   const selectedWord =
     wordListArray[Math.floor(Math.random() * wordListArray.length)];
    setWord(selectedWord);
  }

  const getNormalWord =() =>{
    if (wordIndex === wordListArray.length-1) {
      setWordIndex(0);
    } else {
      setWordIndex(wordIndex=>wordIndex+1);
    } 
    setWord(wordListArray[wordIndex]);
  }  

  const removeWord = () => {
    if (wordIndex === wordListArray.length-1) {
      setWordIndex(0);
      setWord(wordListArray[0])
    }
      else{
      setWord(wordListArray[wordIndex+1])
      }  
    wordListArray = wordListArray.filter(w => w !== word);
    props.onWordRemove(wordListArray.join(" "));
  }

    return (
      <Wrapper className="page-100 ">
      <div className="section section-center word_box">
          <p className="wordContent">{word}</p>
          <div className="button__box">
            <button className="btn  m-3" onClick={getNormalWord}>
              顺序练习
            </button>
            <button className="btn  m-3" onClick={getRandomWord}>
              随机练习
            </button>
          </div>
          <div className="button__box">

            <button className="btn special m-3" onClick={removeWord} disabled={word=== "开始"}>
              删除该字
            </button>
          </div>
        </div>
    </ Wrapper>
    );

}
 
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .word_box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  p {
    font-size: 8rem;
  }
  .special {
    background-color: var(--clr-red-light);
  }
`

export default WordPractice;