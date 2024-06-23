import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";

export const App = () => {
  return (
    <div className="app">
      {/** Imagen del juego */}
      <HangImage imageNumber={ 5 } />

      {/** Palabra oculta */}
      <h3>-----------</h3>

      {/** Contador de intentos */}
      <h2>Intentos: 0</h2>

      {/** Botones de letras */}
      {letters.map((letter) => {
        return <button key={letter}>{letter}</button>;
      })}
      <button>a</button>
    </div>
  );
};
