import React from "react";
import arrow from "../images/arrow.png";
import "./Questions.css";

function Closed({ id, setState, icon }) {
  return (
    <div
      className={"closed_question " + icon}
      onClick={() => {
        if (icon === "play-outline") {
          setState(1);
        }
      }}
    >
      <div>{"Pergunta " + id}</div>
      <div>
        <ion-icon name={icon}></ion-icon>
      </div>
    </div>
  );
}

function Opened({ question, setState }) {
  return (
    <div className="opened_question ">
      <div>
        <p>{question}</p>
      </div>
      <img onClick={() => setState(2)} src={arrow} alt="Setinha"></img>
    </div>
  );
}

function Recall({ answer, setState, setAnswersIcons, answersIcons, setIcon }) {
  const buttons = [
    {
      cls: "forgot",
      name: "close-circle",
      text: "Não lembrei",
    },
    {
      cls: "almost",
      name: "help-circle",
      text: "Quase não lembrei",
    },
    {
      cls: "zap",
      name: "checkmark-circle",
      text: "Zap!",
    },
  ];
  return (
    <div className="opened_question">
      <div>{answer}</div>
      <div className="answer_box">
        {buttons.map((button) => {
          return (
            <div
              className={button.cls}
              onClick={() => {
                setState(0);
                setAnswersIcons([...answersIcons, button.name]);
                setIcon(button.name);
              }}
            >
              {button.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Questions({
  id,
  question,
  answer,
  setAnswersIcons,
  answersIcons,
}) {
  const [state, setState] = React.useState(0);
  const [icon, setIcon] = React.useState("play-outline");

  if (state === 0) {
    return <Closed id={id} setState={setState} icon={icon} />;
  }

  if (state === 1) {
    return <Opened question={question} setState={setState} />;
  }
  if (state === 2) {
    return (
      <Recall
        answer={answer}
        answersIcons={answersIcons}
        setAnswersIcons={setAnswersIcons}
        setState={setState}
        setIcon={setIcon}
      />
    );
  }
}
