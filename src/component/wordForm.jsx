import React, { Component } from 'react'
import { useState } from 'react';

function WordForm (props) {
  
  const [wordString, setWordString] = useState('');

  const handleChange = (e) => {
    const words = e.currentTarget.value;
    setWordString(words);
  };

  console.log(wordString);
  
    return (
      <div className="App">
        <header className="App-header">
          <div className="mb-3">
            <label htmlFor="wordlist" className="form-label mb-3">
              请输入汉字和词汇列表，以空格相隔
            </label>
            <textarea
              className="form-control"
              id="wordlist"
              name="wordlist"
              value={wordString}
              onChange={handleChange}
              rows="8"
            ></textarea>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => props.onHandleSubmit(wordString)}
            disabled={wordString ? false : true}
          >
            提交
          </button>
        </header>
      </div>
    );

}

export default WordForm;
