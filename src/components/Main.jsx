import { useState } from "react";
import "../index.css";

const Main = () => {
  const [click, setClick] = useState(new Set());
  const [bombe] = useState(generateBombe());
  const [score, setScore] = useState(0);

  const fiori = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48,
  ];

  const handleClick = (index) => {
    setClick((prev) => {
      const newSet = new Set(prev);
      if (!newSet.has(index)) {
        newSet.add(index);

        if (bombe.includes(index)) {
          alert("💩 Hai perso! Punteggio: " + score);
          resetGame();
        } else {
          setScore((prevScore) => prevScore + 1);
        }
        return newSet;
      }
    });
  };

  function generateBombe() {
    const bombe = [];
    while (bombe.length < 16) {
      const random = Math.floor(Math.random() * 49);
      if (!bombe.includes(random)) {
        bombe.push(random);
      }
    }
    return bombe;
  }

  function resetGame() {
    setClick(new Set());
    setScore(0);
    setBombe(generateBombe());
  }

  return (
    <>
      <div className="header">
        <h1>Campo Minato 🌸💩</h1>
        <p>Punteggio: {score}</p>
      </div>
      <div className="container campo">
        <div className="row align-items-start">
          {fiori.map((fiore, index) => (
            <div
              key={index}
              className="col-cs"
              onClick={() => handleClick(index)}
            >
              {click.has(index) && bombe.includes(index) && (
                <div className="bomba">💩</div>
              )}

              {click.has(index) && !bombe.includes(index) && (
                <div className="fiore">🌸</div>
              )}

              {/* Overlay se non cliccato */}
              {!click.has(index) && <div className="overlay"></div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
