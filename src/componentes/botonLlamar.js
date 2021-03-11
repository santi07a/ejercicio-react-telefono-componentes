import PropTypes from "prop-types";

const BotonLlamar = props => {
  const { esNumeroCompleto, llamar } = props;
  return (
    <a
      href="llamar"
      className={`llamar${esNumeroCompleto ? " activo" : ""}`}
      onClick={llamar}
    >Llamar</a>
  );
};

BotonLlamar.protoTypes = {
  esNumeroCompleto: PropTypes.bool.isRequired,
  llamar: PropTypes.func.isRequired
};

export default BotonLlamar;
