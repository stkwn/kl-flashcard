import { useEffect, useState } from "react";
import styled from "styled-components";
import {formatStringtoArray} from '../utils/helpers';

const WordPractice = (props) => {
  const [wordListArray, setWordListArray] = useState(formatStringtoArray(props.wordList))
  const [wordIndex, setWordIndex] = useState(0);
  
  useEffect(() => {
    setWordListArray(formatStringtoArray(props.wordList));
  }, [props.wordList]);

  const getRandomWord = () => {
    const tempIndex = Math.floor(Math.random() * wordListArray.length);
    if (tempIndex === wordIndex) {
      if (tempIndex === wordListArray.length-1) {
        setWordIndex(0)
      } else {
        setWordIndex(tempIndex+1)
      }
    } else {
      setWordIndex(tempIndex);
    }
  }

  const getNormalWord =() =>{
    if (wordIndex === wordListArray.length-1) {
      setWordIndex(0);
    } else {
      setWordIndex(wordIndex=>wordIndex+1);
    } 
  }  

  const removeWord = () => {
    wordListArray.splice(wordIndex,1);
    if (wordIndex === wordListArray.length) {
      setWordIndex(0);
    } 
    setWordListArray([...wordListArray]);
    props.onWordRemove([...wordListArray].join(" "));
  }

    return (
      <Wrapper className="page-100 ">
      <div className="ection-center word_box">
          <p className="wordContent">{wordListArray[wordIndex]}</p>
          <div className="button__box">
            <button className="btn  m-3" onClick={getNormalWord}>
              顺序练习
            </button>
            <button className="btn  m-3" onClick={getRandomWord}>
              随机练习
            </button>
          </div>
          <div className="button__box">

            <button className="btn special m-3" onClick={removeWord} >
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