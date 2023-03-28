import { useEffect, useState } from "react";
import WordPractice from "./component/WordPractice";
import WordForm from "./component/WordForm";
import Header from "./component/Header";
import Footer from "./component/Footer";
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
