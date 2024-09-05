import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const { searchContainer, searchTitle, searchInput } = css;

  const dispatch = useDispatch();

  const selectNameFilter = useSelector(state => {
    state.filters.filters.name;
  });

  const handleFilter = event => {
    const value = event.target.value;
    const action = changeFilter(value);
    dispatch(action);
  };

  return (
    <div className={searchContainer}>
      <h2 className={searchTitle}>Find contacts by name</h2>
      <input
        type="text"
        placeholder="Search..."
        className={searchInput}
        value={selectNameFilter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
