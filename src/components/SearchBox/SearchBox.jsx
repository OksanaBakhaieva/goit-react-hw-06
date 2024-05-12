import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox () {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  const handleFilterChange = filter => dispatch(changeFilter(filter));
  return (
    <div className={css.searchBox}>
      <span>Find contacts by name</span>
      <input
        className={css.searchField}
        type="text"
        name="filter"
        value={filter}
        onChange={evt => handleFilterChange(evt.target.value)}
        placeholder="Search"
      />
    </div>
  );
};

