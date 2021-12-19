import styles from "./Form.module.css";
import PropTypes from "prop-types";
import {nanoid} from "nanoid";
import React, { Component } from 'react';



class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  nameRandomId = nanoid();
  numberRandomId = nanoid();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.addForm}>
          <label className={styles.label} htmlFor={this.nameRandomId}>
            Name:
            <input
              onChange={this.handleChange}
              value={this.state.name}
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label htmlFor={this.numberRandomId} className={styles.label}>
            Number:
            <input
              className={styles.input}
              value={this.state.number}
              id={this.numberRandomId}
              onChange={this.handleChange}
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit" className={styles.btn}>
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
