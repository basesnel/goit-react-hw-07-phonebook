import { FilterLabel } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from '../../../redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
        className="filter__input"
      />
    </FilterLabel>
  );
};

export default Filter;
