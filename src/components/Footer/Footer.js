import Message from "../Message/Message";
import Results from "../Results/Results";
import "./Footer.css";

export default function Footer({ answers, size, index }) {
  if (answers.length === size) {
    return (
      <footer className="final_result">
        <div>
          <Message answers={answers} key={index} />
        </div>
        <Results answers={answers} size={size} key={index} />
      </footer>
    );
  }
  return (
    <footer>
      <Results answers={answers} size={size} key={index} />
    </footer>
  );
}
