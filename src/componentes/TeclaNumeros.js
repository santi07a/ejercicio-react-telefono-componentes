import PropTypes from "prop-types";

const TeclaNumeros = (props) => {
  const { llamando, anyadirDigito } = props;
  return (
    [...[...Array(10)].map((x, i) => i).slice(1), 0].map(digito => (
      <li key={digito}>
        <button disabled={llamando} onClick={() => anyadirDigito(digito)}>{digito}</button>
      </li>
    ))
  );
};

TeclaNumeros.propTypes = {
  llamando: PropTypes.bool.isRequired,
  anyadirDigito: PropTypes.func.isRequired,
};


export default TeclaNumeros;
