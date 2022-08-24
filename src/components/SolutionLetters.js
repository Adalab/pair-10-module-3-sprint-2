const Solution = (props) => {
  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>

      <ul className="letters">
        {props.renderSolutionLetters()}
        {/* //<li className="labeletter"></li>
              <li className="letter"></li>
              <li className="letter"></li>
              <li className="letter"></li>
              <li className="letter"></li>
              <li className="letter"></li>
              <li className="letter"></li>
              <li className="letter"></li>
              <li className="letter"></li>
             <li className="letter"></li>// */}
      </ul>
    </div>
  );
};

export default Solution;
