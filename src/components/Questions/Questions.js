import React from "react";
import arrow from "../images/arrow.png";
import "./Questions.css";

export default function Questions({ id, question, answer }) {
  const [questionState, setQuestionState] = React.useState(<Closed />);

  function Closed() {
    return (
      <div className="closed_question">
        <div>{"Pergunta " + id}</div>
        <div onClick={() => setQuestionState(<Opened />)}>
          <ion-icon name="play-outline"></ion-icon>
        </div>
      </div>
    );
  }

  function Opened() {
    return (
      <div className="opened_question">
        <div>
          <p>{question}</p>
        </div>
        <img
          onClick={() => setQuestionState(<ShowAnswer />)}
          src={arrow}
          alt="Setinha"
        ></img>
      </div>
    );
  }

  function ShowAnswer() {
    return (
      <div className="opened_question">
        <div>{answer}</div>
      </div>
    );
  }

  return <>{questionState}</>;
}
