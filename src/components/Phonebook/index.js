import { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from '../Phonebook/Section';
import s from './Phonebook.module.css';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

// const data = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handelSearch = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  addContact = (name, number) => {
    const newName = this.state.contacts.map(el => el.name.toLowerCase());
    if (newName.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        id: nanoid(3),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div className={s.Phonebook}>
        <Section title={'Phonebook'} s={s}>
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title={'Contacts'} s={s}>
          <Filter value={filter} onChange={this.handelSearch} s={s} />
          <ContactList
            contacts={filterContacts}
            onClickDelete={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default Phonebook;
