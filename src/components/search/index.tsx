import debounce from 'lodash.debounce';
import { useCallback, useEffect } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setPage, setSearchValue } from '../../store/repositories';
import { getRepositories } from '../../store/repositories/get-repositories.thunk';
import { getSearchValue } from '../../store/repositories/repository.selectors';

import classes from './search.module.scss';

export const Search = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(getSearchValue);

  const debouncedRequest = useCallback(
    debounce((name: string) => {
      dispatch(setPage(1));
      dispatch(getRepositories({ name, page: 1 }));
    }, 500),
    [],
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch(setSearchValue(value));
    debouncedRequest(value);
  };

  useEffect(() => {
    dispatch(getRepositories({ name: 'react', page: 1 }));
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
