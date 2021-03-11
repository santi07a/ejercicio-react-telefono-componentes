import PropTypes from "prop-types";

const Llamando = (props) => {
  const { llamando } = props;
  return (
    <span className={`mensaje${!llamando ? " off" : ""}`}>Llamando...</span>
  );
};



Llamando.propTypes = {
  llamando: PropTypes.bool.isRequired
};

export default Llamando;
