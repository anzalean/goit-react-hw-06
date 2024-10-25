import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.filters.name);

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
