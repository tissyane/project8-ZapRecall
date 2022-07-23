import "./Footer.css";

export default function Footer({ answers, size }) {
  return (
    <footer>
      <p>
        {answers.length}/{size} Concluídos
      </p>
      <div>
        {answers.map((answer) => (
          <ion-icon name={answer}></ion-icon>
        ))}
      </div>
    </footer>
  );
}
