
import styles from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = ({ searchValue }) => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      className={styles.searchBox}
      type="text"
      placeholder="Пошук за ім'ям..."
      value={searchValue}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBox;
