import React from "react";
import arrow from "../images/arrow.png";
import "./Questions.css";

export default function Questions({ id, question, answer, setAnswersCount }) {
  const [state, setState] = React.useState(<Closed />);

  function Closed() {
    return (
      <div className="closed_question" onClick={() => setState(<Opened />)}>
        <div>{"Pergunta " + id}</div>
        <div>
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
          onClick={() => setState(<Recall />)}
          src={arrow}
          alt="Setinha"
        ></img>
      </div>
    );
  }

  function Recall() {
    return (
      <div className="opened_question">
        <div>{answer}</div>
        <div className="answer_box">
          <div
            className="forgot"
            onClick={() => {
              setAnswersCount((answersCount) => {
                return answersCount + 1;
              });
              setState(<CheckAnswer boxAnswer="forgot" />);
            }}
          >
            Não lembrei
          </div>
          <div
            className="almost"
            onClick={() => {
              setAnswersCount((answersCount) => {
                return answersCount + 1;
              });
              setState(<CheckAnswer boxAnswer="almost" />);
            }}
          >
            Quase não lembrei
          </div>
          <div
            className="zap"
            onClick={() => {
              setAnswersCount((answersCount) => {
                return answersCount + 1;
              });
              setState(<CheckAnswer boxAnswer="zap" />);
            }}
          >
            Zap!
          </div>
        </div>
      </div>
    );
  }

  function CheckAnswer({ boxAnswer }) {
    if (boxAnswer === "forgot")
      return (
        <div className="closed_question answered red">
          <div>{"Pergunta " + id}</div>
          <div>
            <ion-icon name="close-circle"></ion-icon>
          </div>
        </div>
      );

    if (boxAnswer === "almost")
      return (
        <div className="closed_question answered orange">
          <div>{"Pergunta " + id}</div>
          <div>
            <ion-icon name="help-circle"></ion-icon>
          </div>
        </div>
      );
    if (boxAnswer === "zap")
      return (
        <div className="closed_question answered green">
          <div>{"Pergunta " + id}</div>
          <div>
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
        </div>
      );
  }

  return <>{state}</>;
}
