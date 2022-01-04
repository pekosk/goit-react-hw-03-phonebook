import './App.css';
import React, { Component } from 'react';
import { nanoid } from "nanoid";
import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contact = localStorage.getItem('contacts')
    const contactsParse = JSON.parse(contact);
    if (contactsParse) {
      this.setState({ contacts: contactsParse })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const newContacts = this.state.contacts;
    const oldContacts = prevState.contacts;

    if (newContacts !== oldContacts) {
      localStorage.setItem('contacts', JSON.stringify(newContacts))
    }
  }

  addContact = (data) => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (
      this.state.contacts.find(
        (con) => con.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    } else
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact].sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      }));
  };

  onFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  onContactsFilter = () => {
    const { contacts, filter } = this.state;
    if (filter.includes(filter) || filter === '') {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  onDelete = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onFilter={this.onFilter} />
          <Contacts
            contacts={this.onContactsFilter()}
            onDelete={this.onDelete} />
        </Section>
      </>
    );
  }
}


export default App;
