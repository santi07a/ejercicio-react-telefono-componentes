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

export default Botones;
