import Header from "./Header";
import React from "react";
import "../styles/scss/main.scss";
import { Route } from "react-router-dom";

import { useEffect, useState } from "react";
import Dummy from "./Dummy";
import Solution from "./SolutionLetters";
import getWordFromApi from "../services/api";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const handleIncrease = (event) => {
    event.preventDefault();
    setNumberOfErrors(numberOfErrors + 1);
  };
  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);
  
  const [warningMsj, setwarnigMsj] = useState("");
  const [word, setWord] = useState("katakroker");
  const [letters, setLastLetters] = useState("");
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      const exists = userLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className='letter'>
          {exists ? letter : ''}
        </li>
      );
    });
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };
  //  const handleCounter = (event) => {
  //   setLastLetter(event.target.value);
  const handleInput = (event) => {
    const inputValue = event.currentTarget.value;
    const valided = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]{1}$/;
    if (valided.test(inputValue)) {
      setLastLetter(inputValue);
      setwarnigMsj("");
      // Hay que añadir más código pra que cuente las las letras
    } else {
      setLastLetter("");
      setwarnigMsj("Debes introducir una letra válida");
    }
  };
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section>
          <Solution renderSolutionLetters={renderSolutionLetters} />
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
         <Form 
         lastLetter = {lastLetter}
         handleInput = {handleInput}
         warningMsj = {warningMsj}
         handleIncrease = {handleIncrease}
         />
        </section>
        <Dummy error={numberOfErrors} />
      </main>
      <Footer/>
    </div>
  );
}
export default App;
