import styles from "./Filter.module.css";
import PropTypes from "prop-types";


const Filter = ({ value, onFilter }) => {
    return (
<label className={styles.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onFilter} className={styles.input}></input>
    </label>
    )
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;