import { ContactForm } from 'components/PhoneBook/ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './PhoneBook.module.css';

export function PhoneBook() {
  return (
    <>
      <div className={css.phonebook}>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
      <ToastContainer autoClose={1500} position="top-center" />
    </>
  );
}
