import sad from "../images/sad.png";
import party from "../images/party.png";
import "./Message.css";

export default function Message({ answers }) {
  const putz = answers.filter((answer) => answer === "close-circle");

  if (putz.length !== 0) {
    return (
      <>
        <div className="message_title">
          <img src={sad} alt="sadface"></img>
          <p>Putz...</p>
        </div>
        <div className="message_body">
          <p>
            Ainda faltam alguns... <br />
            Mas não desanime!
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="message_title">
        <img src={party} alt="partyface"></img>
        <p>Parabéns!</p>
      </div>
      <div className="message_body">
        <p>
          Você não esqueceu de <br /> nenhum flashcard!
        </p>
      </div>
    </>
  );
}
