<<<<<<< HEAD
=======

>>>>>>> 9e06870abe65a60d62ed038e19ebe25a9a6342a4
import WordForm from "./component/wordForm";
import { useEffect, useState } from "react";
import WordPractice from "./component/WordPractice";
import Header from "./component/header";
import Footer from "./component/footer";
function App() {
  const [wordList, setWordList] = useState(() => {
    const savedWordList = localStorage.getItem("wordList");
    const initialValue = JSON.parse(savedWordList);
    return initialValue || null;
  });

  const handleSubmit = (wordString) => {
    setWordList(wordString);
  };

  const removeWord = (wordString) => {
    console.log(wordString);
    setWordList(wordString);
  };

  useEffect(() => {
    localStorage.setItem("wordList", JSON.stringify(wordList));
  }, [wordList]);

  return (
    <>
      <Header />
      {wordList ? (
        <WordPractice wordList={wordList} onWordRemove={removeWord} />
      ) : (
        <WordForm onHandleSubmit={handleSubmit} />
      )}
      <Footer />
    </>
  );
}
export default App;
