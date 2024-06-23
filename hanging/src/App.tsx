import { letters } from "./helpers/letters";

export const App = () => {
  return (
    <>
      {/** Imagenes */}
      <img src="https://picsum.photos/200/300" alt="Imagen aleatoria" />

      {/** Palabra oculta */}
      <h3>-----------</h3>

      {/** Contador de intentos */}
      <h2>Intentos: 0</h2>

      {/** Botones de letras */}
      {letters.map((letter) => {
        return <button key={letter}>{letter}</button>;
      })}
      <button>a</button>
    </>
  );
};
