import PropTypes from "prop-types";

const BotonColgar = props => {
  const { colgar } = props;
  return (
    <a href="colgar" className="colgar activo" onClick={colgar}>Colgar</a>
  );
};

BotonColgar.protoTypes = {
  colgar: PropTypes.func.isRequired
};

export default BotonColgar;
