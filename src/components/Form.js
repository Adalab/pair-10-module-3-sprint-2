const Form = (props) => {
    return (
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
              value={props.lastLetter}
              onChange={props.handleInput}
            />
            <p> {props.warningMsj} </p>
            <button onClick={props.handleIncrease}>Incrementar</button>
          </form>  
    )
}

export default Form;