import PropTypes from "prop-types";

const Botones = props => {
  const { llamando, esNumeroCompleto, llamar, colgar } = props;
  return (
    !llamando
      ? <a
        href="llamar"
        className={`llamar${esNumeroCompleto ? " activo" : ""}`}
        onClick={llamar}
      >Llamar</a>
      : <a href="colgar" className="colgar activo" onClick={colgar}>Colgar</a>
  );
};

Botones.protoTypes = {
  llamando: PropTypes.bool,
  esNumeroCompleto: PropTypes.bool,
  llamar: PropTypes.func,
  colgar: PropTypes.func
};

export default Botones;
