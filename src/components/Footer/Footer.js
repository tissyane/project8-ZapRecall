import Message from "../Message/Message";
import Results from "../Results/Results";
import "./Footer.css";

export default function Footer({ answers, size, index }) {
  if (answers.length === size) {
    return (
      <footer>
        <div className="final_result">
          <Message answers={answers} key={index} />
          <Results answers={answers} size={size} key={index} />
        </div>
      </footer>
    );
  } else {
    return (
      <footer>
        <Results answers={answers} size={size} key={index} />
      </footer>
    );
  }
}
