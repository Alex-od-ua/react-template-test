import { useSelector, useDispatch } from 'react-redux';

import Loader from 'shared/components/Loader/Loader';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { fetchDeleteContact } from 'Redux/contacts/contacts-operations';
import {
  getFilteredContacts,
  getContacts,
  isLoading,
} from 'Redux/contacts/contacts-selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const filter = useSelector(getFilteredContacts);
  const contacts = useSelector(getContacts);
  const Loading = useSelector(isLoading);

  const dispatch = useDispatch();

  const handleDeleteContact = Id => {
    dispatch(fetchDeleteContact(Id));
    toast('Deleted');
  };

  const filteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const filteredItem = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredItem;
  };

  const contactsItem = filteredContacts();

  console.log(contactsItem);

  return (
    <>
      {Loading && <Loader />}
      <ul className={css.contact__list}>
        {contactsItem.map(({ id, name, number }) => (
          <li key={id} className={css.contact__item}>
            <div>
              <p className={css.contact__name}> {name}</p>
              <p className={css.contact__name}> {number}</p>
            </div>

            <Button
              type="button"
              variant="contained"
              endIcon={<DeleteIcon />}
              size="small"
              className={css.contact__btn}
              onClick={() => handleDeleteContact(id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
