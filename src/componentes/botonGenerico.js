import PropTypes from "prop-types";

const BotonGenerico = props => {
  const { esNumeroCompleto, accion } = props;
  return (
    <a
      href={accion.name}
      className={`${accion.name}${esNumeroCompleto ? " activo" : ""}`}
      onClick={accion}
    >{accion.name}</a>
  );
};

BotonGenerico.protoTypes = {
  esNumeroCompleto: PropTypes.bool.isRequired,
  accion: PropTypes.func.isRequired
};

export default BotonGenerico;
