
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';

const ContactList = ({ deleteContact }) => {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={styles.contactList}>
      {contacts?.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} deleteContact={deleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
