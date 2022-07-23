import React from "react";
import arrow from "../images/arrow.png";
import "./Questions.css";

export default function Questions({ id, question, answer }) {
  const [questionState, setQuestionState] = React.useState(<Closed />);

  function Closed() {
    return (
      <div
        className="closed_question"
        onClick={() => setQuestionState(<Opened />)}
      >
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
        <div className="answer_box">
          <div
            className="forgot"
            onClick={() => setQuestionState(<Recall color="forgot" />)}
          >
            Forgot
          </div>
          <div
            className="almost"
            onClick={() => setQuestionState(<Recall color="almost" />)}
          >
            Almost
          </div>
          <div
            className="zap"
            onClick={() => setQuestionState(<Recall color="zap" />)}
          >
            Zap
          </div>
        </div>
      </div>
    );
  }

  function Recall({ color }) {
    switch (color) {
      case "forgot":
        return (
          <div className="closed_question answered red">
            <div>{"Pergunta " + id}</div>
            <div>
              <ion-icon name="close-circle"></ion-icon>
            </div>
          </div>
        );

      case "almost":
        return (
          <div className="closed_question answered orange">
            <div>{"Pergunta " + id}</div>
            <div>
              <ion-icon name="help-circle"></ion-icon>
            </div>
          </div>
        );
      case "zap":
        return (
          <div className="closed_question answered green">
            <div>{"Pergunta " + id}</div>
            <div>
              <ion-icon name="checkmark-circle"></ion-icon>
            </div>
          </div>
        );
      default:
        return <></>;
    }
  }

  return <>{questionState}</>;
}
