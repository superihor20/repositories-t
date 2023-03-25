import debounce from 'lodash.debounce';
import { useCallback, useEffect, useState } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getRepositoriesByName } from '../../store/repositories/get-repositories.thunk';

import classes from './search.module.scss';

export const Search = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState('');

  const debouncedRequest = useCallback(
    debounce((name: string) => dispatch(getRepositoriesByName({ name, page: 1 })), 500),
    [],
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);
    debouncedRequest(value);
  };

  useEffect(() => {
    dispatch(getRepositoriesByName({ name: 'react', page: 1 }));
  }, []);

  return (
    <input
      className={classes.search}
      type="text"
      placeholder="Search"
      value={searchValue}
      onChange={handleSearch}
    />
  );
};
