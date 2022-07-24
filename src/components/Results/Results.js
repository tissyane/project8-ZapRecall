import "./Results.css";

export default function Results({ answers, size, index }) {
  return (
    <footer>
      <p>
        {answers.length}/{size} CONCLUÍDOS
      </p>
      <div>
        {answers.map((answer) => (
          <ion-icon name={answer} key={index}></ion-icon>
        ))}
      </div>
    </footer>
  );
}
