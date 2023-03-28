import React from 'react'
import { useState } from 'react';

function WordForm (props) {
  
  const [wordString, setWordString] = useState('');

  const handleChange = (e) => {
    const words = e.currentTarget.value;
    setWordString(words);
  };
  
    return (
      <div className="page-100">
        <div className="section section-center">
          <div className="mb-3">
            <label htmlFor="wordlist" className="form-label mb-3">
              <h2>请输入汉字和词汇列表，以空格相隔</h2>
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
          <div className='mb-3'>
          <button
            className="btn  m-3"
            onClick={() => props.onHandleSubmit(wordString)}
            disabled={wordString ? false : true}
          >
            提交
          </button>
          {/* <button
            className="btn m-3"
            onClick={() => props.onHandleSubmit(wordString)}
          >
            导入词汇
          </button> */}
          </div>
        </div>
      </div>
    );

}

export default WordForm;
