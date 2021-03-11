import { useState } from "react";
/* import Botones from "./componentes/botones"; */
import BotonGenerico from "./componentes/botonGenerico";
import Display from "./componentes/display";
import Llamando from "./componentes/llamando";
import Teclas from "./componentes/Teclas";
const maxDigitos = 9;

let temporizador;

function App() {
  const [numero, setNumero] = useState("");
  const [llamando, setLlamando] = useState(false);
  const esNumeroCompleto = numero.length === maxDigitos;

  const anyadirDigito = digito => {
    if (numero.length < maxDigitos) {
      setNumero(numero + digito);
    }
  };
  const borrarUltimoDigito = () => setNumero(numero.slice(0, -1));
  /* const borrarNumero = () => setNumero(""); */

  const llamar = e => {
    e.preventDefault();
    if (esNumeroCompleto) {
      setLlamando(true);
      temporizador = setTimeout(() => {
        colgar();
      }, 5000);
    }
  };

  const colgar = e => {
    if (typeof e !== "undefined") {
      e.preventDefault();
    }

    setNumero("");
    setLlamando(false);
    clearTimeout(temporizador);
  };

  return (
    <div className="contenedor">
      <Llamando llamando={llamando} />
      <main className="telefono">
        <div className="botones">
          <Teclas llamando={llamando} anyadirDigito={anyadirDigito} borrarUltimoDigito={borrarUltimoDigito} />
        </div>
        <div className="acciones">
          <Display numero={numero} />
          <BotonGenerico esNumeroCompleto={esNumeroCompleto} accion={llamando ? colgar : llamar}></BotonGenerico>
        </div>
      </main>
    </div>
  );
}

export default App;
