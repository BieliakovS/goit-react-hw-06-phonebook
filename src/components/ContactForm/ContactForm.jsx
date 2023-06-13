import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../reducers/contactsSlice';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const isContactUnique = contacts.every(
      contact => contact.name.toLowerCase() !== name.toLowerCase()
    );

    if (!isContactUnique) {
      alert('Contact with this name already exists');
      return;
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    dispatch(addContact(contact));

    setName('');
    setNumber('');
  };

  return (
    <form className={css.ContactForm} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={event => setNumber(event.target.value)}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
