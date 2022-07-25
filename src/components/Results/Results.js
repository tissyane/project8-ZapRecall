import "./Results.css";

export default function Results({ answers, size, index }) {
  return (
    <div className="results">
      <p>
        {answers.length}/{size} CONCLUÍDOS
      </p>
      <div>
        {answers.map((answer) => (
          <ion-icon name={answer} key={index}></ion-icon>
        ))}
      </div>
    </div>
  );
}
