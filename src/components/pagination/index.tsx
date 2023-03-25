import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setPage } from '../../store/repositories';
import { getRepositories } from '../../store/repositories/get-repositories.thunk';

import { Button } from './components/button';
import classes from './pagination.module.scss';

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(({ repositoriesState: { searchValue } }) => searchValue);
  const page = useAppSelector(({ repositoriesState: { page } }) => page);

  const handleNextPage = () => {
    const nextPage = page + 1;

    dispatch(setPage(nextPage));
    dispatch(getRepositories({ name: name || 'react', page: nextPage }));
  };

  const handlePreviosPage = () => {
    const prevPage = Math.max(1, page - 1);

    dispatch(setPage(prevPage));
    dispatch(getRepositories({ name: name || 'react', page: prevPage }));
  };

  return (
    <div className={classes.pagination}>
      <Button onClick={handlePreviosPage}>Previos</Button>
      <Button onClick={handleNextPage}>Next</Button>
    </div>
  );
};
