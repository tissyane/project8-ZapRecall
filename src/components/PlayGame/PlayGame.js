import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

import "./PlayGame.css";
import React from "react";
import Questions from "../Questions/Questions";

export default function PlayGame() {
  const [answersIcons, setAnswersIcons] = React.useState([]);

  const deck = [
    {
      question: "Como iniciar um repositório git?",
      answer: "git init",
    },
    {
      question:
        "Em qual arquivo deve-se colocar o nome de pastas/arquivos a serem ignorados pelo git?",
      answer: ".gitignore",
    },
    {
      question: "Quais os passos para adicionar mudanças ao repo no GitHub?",
      answer: "git add <filename> \n git commit -m 'mensagem'\ngit push",
    },
    {
      question: "Qual o comando para adicionar um arquivo a área de staging?",
      answer: "git add <filename>",
    },
    {
      question: "Qual o commando para commitar as mudanças?",
      answer: "git commit -m 'mensagem'",
    },
    {
      question: "Como ver o histórico de commits?",
      answer: "git log",
    },
    {
      question: "Como ver a área de staging?",
      answer: "git status",
    },
    {
      question:
        "Como fazer download da última versão de um projeto de um reposítorio remoto para sua máquina?",
      answer: "git clone <url>",
    },
  ];

  deck.sort(() => Math.random() - 0.5);

  return (
    <>
      <div className="header">
        <Logo />
      </div>
      <section>
        {deck.map((data, index) => (
          <Questions
            key={index}
            question={data.question}
            id={index + 1}
            answer={data.answer}
            setAnswersIcons={setAnswersIcons}
            answersIcons={answersIcons}
          />
        ))}
      </section>
      <div>
        <Footer size={deck.length} answers={answersIcons} />
      </div>
    </>
  );
}
