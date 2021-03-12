import PropTypes from "prop-types";

const BotonGenerico = props => {
  const { esNumeroCompleto, accion, texto } = props;
  return (
    <a
      href={accion.name}
      className={`${accion.name}${esNumeroCompleto ? " activo" : ""}`}
      onClick={accion}
    >{texto}</a>
  );
};

BotonGenerico.protoTypes = {
  esNumeroCompleto: PropTypes.bool.isRequired,
  accion: PropTypes.func.isRequired,
  texto: PropTypes.string.isRequired
};

export default BotonGenerico;
