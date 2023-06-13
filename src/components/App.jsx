import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts, addContact, deleteContact } from '../redux/contactsSlice';
import { setFilter } from '../redux/filterSlice'; // Оновлено імпорт
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.filter);
  const [filter, setFilterValue] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      dispatch(setContacts(JSON.parse(savedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = contact => {
    const isDuplicateName = contacts.some(
      c => c.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isDuplicateName) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = event => {
    const newFilter = event.currentTarget.value;
    setFilterValue(newFilter);
    dispatch(setFilter(newFilter)); // Оновлено виклик функції setFilter
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onFilterChange={handleFilterChange} filterValue={filter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
