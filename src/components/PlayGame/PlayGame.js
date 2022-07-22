import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import Questions from "../Questions/Questions";
import "./PlayGame.css";

export default function PlayGame() {
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
      answer: "git add <filename>\ngit commit -m 'mensagem'\ngit push",
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
  ];

  const sortdeck = deck.sort(() => Math.random() - 0.5);

  return (
    <>
      <div className="header">
        <Logo />
      </div>
      <section>
        {sortdeck.map((data, index) => (
          <Questions
            key={index}
            question={data.question}
            id={index + 1}
            answer={data.answer}
          />
        ))}
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
}
