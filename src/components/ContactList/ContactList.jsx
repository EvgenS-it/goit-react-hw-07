import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const dispatch = useDispatch();
  const selectContacts = useSelector(state => {
    // console.log(state);
    return state.contacts.contacts.items;
  });

  const onDeleteContact = contactId => {
    // setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
    dispatch(deleteContact(contactId));
  };

  const selectNameFilter = useSelector(state => {
    return state.filters.filters.name;
  });

  const filteredContacts = selectContacts.filter(contact =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className={css.contactItem}>
            <Contact
              name={contact.name}
              number={contact.number}
              onDeleteContact={onDeleteContact}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
