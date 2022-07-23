import "./Footer.css";

export default function Footer({ answers, size }) {
  return (
    <footer>
      <p>
        {answers}/{size} Concluídos
      </p>
    </footer>
  );
}
