import styles from "./Contacts.module.css";
import PropTypes from "prop-types";

const Contacts = ({ contacts, onDelete }) => {
    const contact = contacts.map(contact => (
                <li className={styles.contactItem} key={contact.id}>
                    <span className={styles.text}>{contact.name}: </span>
                    <span className={styles.text}>{contact.number}</span>
                    <button onClick={() => onDelete(contact.id)} className={styles.btn}>
                        Delete
                    </button>
                </li>
            ))
    return (
        <ul>
            {contact}
        </ul>
    );
}

Contacts.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
    }),
    onDelete: PropTypes.func.isRequired,
};

export default Contacts;
