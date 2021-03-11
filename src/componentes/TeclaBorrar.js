import PropTypes from "prop-types";

const TeclaBorrar = (props) => {
  const { llamando, borrarUltimoDigito } = props;
  return (
    <li><button disabled={llamando} className="big" onClick={borrarUltimoDigito}>borrar</button></li>
  );
};

TeclaBorrar.propType = {
  llamando: PropTypes.bool.isRequired,
  borrarUltimoDigito: PropTypes.func.isRequired
};

export default TeclaBorrar;
