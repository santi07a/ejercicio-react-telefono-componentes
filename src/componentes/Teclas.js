import PropTypes from "prop-types";
import TeclaBorrar from "./TeclaBorrar";
import TeclaNumeros from "./TeclaNumeros";

const Teclas = (props) => {
  const { llamando, anyadirDigito, borrarUltimoDigito } = props;
  return (
    <ol className="teclado">
      <TeclaNumeros llamando={llamando} anyadirDigito={anyadirDigito} />
      <TeclaBorrar llamando={llamando} borrarUltimoDigito={borrarUltimoDigito} />
    </ol>
  );
};

Teclas.propTypes = {
  llamando: PropTypes.bool.isRequired,
  anyadirDigito: PropTypes.func.isRequired,
  borrarUltimoDigito: PropTypes.func.isRequired
};

export default Teclas;
