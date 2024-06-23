import { useState } from "react";
import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";

export const App = () => {
  // useState de la palabra
  const [word, setWord] = useState("pepe");

  // useState de la palabra oculta
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length));

  const [attemps, setAttemps] = useState(0);

  const checkLetter = (letter: string) => {
    console.log(letter);
    // Aumenta el numero de intentos y mantiene el numero en 9
    setAttemps(Math.min(attemps + 1, 9));
  };

  return (
    <div className="app">
      {/** Imagen del juego */}
      <HangImage imageNumber={attemps} />

      {/** Palabra oculta */}
      <h3>{hiddenWord}</h3>

      {/** Contador de intentos */}
      <h2>Intentos: {attemps}</h2>

      {/** Botones de letras */}
      {letters.map((letter) => {
        return (
          <button onClick={() => checkLetter(letter)} key={letter}>
            {letter}
          </button>
        );
      })}
    </div>
  );
};
