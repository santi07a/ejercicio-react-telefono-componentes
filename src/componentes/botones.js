import PropTypes from "prop-types";
import BotonColgar from "./botonColgar";
import BotonLlamar from "./botonLlamar";

const Botones = props => {
  const { llamando, esNumeroCompleto, llamar, colgar } = props;
  return (
    !llamando
      ? <BotonLlamar esNumeroCompleto={esNumeroCompleto} llamar={llamar}></BotonLlamar>
      : <BotonColgar colgar={colgar}></BotonColgar>
  );
};

Botones.protoTypes = {
  llamando: PropTypes.bool.isRequired,
  esNumeroCompleto: PropTypes.bool.isRequired,
  llamar: PropTypes.func.isRequired,
  colgar: PropTypes.func.isRequired
};

export default Botones;
