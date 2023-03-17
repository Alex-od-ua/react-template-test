import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { nanoid } from 'nanoid';

import Button from '@mui/material/Button';

import {
  fetchAllContacts,
  fetchAddContact,
} from 'Redux/contacts/contacts-operations';

// import { toast } from 'react-toastify';

import css from './ContactForm.module.css';

export function ContactForm() {
  const [contact, setContacts] = useState({ name: '', number: '' });

  const dispatch = useDispatch();

  const { name, number } = contact;

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    setContacts(prevValue => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleAddContact = event => {
    event.preventDefault();
    const newContactItem = { name, number };

    dispatch(fetchAddContact(newContactItem));
    reset();
  };

  const reset = () => {
    setContacts({ name: '', number: '' });
  };

  return (
    <>
      <h2 className={css.main__title}>Phonebook</h2>
      <form className={css.contact__form} onSubmit={handleAddContact}>
        <label htmlFor={nameInputId}>
          Name
          <input
            className={css.input__name}
            placeholder="exemple: Rosie Simpson"
            type="text"
            name="name"
            id={nameInputId}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor={numberInputId}>
          Number
          <input
            className={css.input__number}
            placeholder="exemple: 123-12-12"
            type="tel"
            name="number"
            id={numberInputId}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </label>

        <Button type="submit" variant="contained" className={css.input__btn}>
          Add contact
        </Button>
      </form>
    </>
  );
}
