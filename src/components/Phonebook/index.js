import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import Section from '../Phonebook/Section';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

import './Phonebook.module.css';

const data = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const Phonebook = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (!contacts) {
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newName = contacts.map(el => el.name.toLowerCase());
    if (newName.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        id: nanoid(3),
        name,
        number,
      };

      setContacts(prevState => [...prevState, contact]);
    }
  };

  const handelSearch = event => {
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div className="Phonebook">
      <Section title={'Phonebook'}>
        <Form onSubmit={addContact} />
      </Section>
      <Section title={'Contacts'}>
        <Filter value={filter} onChange={handelSearch} />
        <ContactList
          contacts={filterContacts()}
          onClickDelete={deleteContact}
        />
      </Section>
    </div>
  );
};

export default Phonebook;
