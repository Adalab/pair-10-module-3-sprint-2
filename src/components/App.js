import Header from "./Header";
import React from "react";
import "../styles/scss/main.scss";

import { useState } from "react";
import Dummy from "./Dummy";
import Solution from "./SolutionLetters";

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const handleIncrease = (event) => {
    event.preventDefault();
    setNumberOfErrors(numberOfErrors + 1);
  };

  const [lastLetter, setLetter] = useState("");
  const [warningMsj, setwarnigMsj] = useState("");
  const [word, setWord] = useState("katakroker");
  const [letters, setLetters] = useState("");

  const wordLetters = word.split("");
  const renderSolutionLetters = () => {
    return wordLetters.map((letters) => {
      return <li className="letter"></li>;
    });
  };
  //  const handleCounter = (event) => {
  //   setLetter(event.target.value);
  const handleInput = (event) => {
    const inputValue = event.currentTarget.value;
    const valided = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]{1}$/;
    if (valided.test(inputValue)) {
      setLetter(inputValue);
      setwarnigMsj("");
      // Hay que añadir más código pra que cuente las las letras
    } else {
      setLetter("");
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
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autocomplete="off"
              className="form__input"
              maxlength="1"
              type="text"
              name="lastLetter"
              id="lastLetterr"
              value={lastLetter}
              onChange={handleInput}
            />
            <p> {warningMsj} </p>
            <button onClick={handleIncrease}>Incrementar</button>
          </form>
        </section>
        <Dummy error={numberOfErrors} />
      </main>
    </div>
  );
}
export default App;
