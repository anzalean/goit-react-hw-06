
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, addContact, deleteContact } from './redux/contactsSlice';
import { selectNameFilter, changeFilter } from './redux/filtersSlice';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const searchTerm = useSelector(selectNameFilter);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleSearchChange = value => {
    dispatch(changeFilter(value));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox searchValue={searchTerm} handleSearchChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} deleteContact={handleDeleteContact} />
    </>
  );
};

export default App;
