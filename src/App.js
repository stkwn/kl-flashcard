
import './App.css';
// import WordPractice from "./component/WWordPractice";
import WordForm from './component/wordForm'
import { useState } from 'react';
import WordPractice from './component/WordPractice';

function App() {
  const [wordList, setWordList] = useState(null);

  const handleSubmit = (wordString) => {
    console.log(wordString);
    setWordList(wordString);
  };
  

  if (wordList) return <WordPractice wordList={wordList} />; 
    else return <WordForm onHandleSubmit={handleSubmit} />;
}

export default App;
