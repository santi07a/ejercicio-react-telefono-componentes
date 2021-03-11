import PropTypes from "prop-types";
import TeclaNumeros from "./TeclaNumeros";

const Teclas = (props) => {
  const { llamando, anyadirDigito, borrarUltimoDigito } = props;
  return (
    <ol className="teclado">
      <TeclaNumeros llamando={llamando} anyadirDigito={anyadirDigito} />
      <li><button disabled={llamando} className="big" onClick={borrarUltimoDigito}>borrar</button></li>
    </ol>
  );
};

Teclas.propTypes = {
  llamando: PropTypes.bool.isRequired,
  anyadirDigito: PropTypes.func.isRequired,
  borrarUltimoDigito: PropTypes.func.isRequired
};

export default Teclas;
