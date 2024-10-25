import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchTerm = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} deleteContact={handleDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
