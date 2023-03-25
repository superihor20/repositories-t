import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setPage } from '../../store/repositories';
import { getRepositories } from '../../store/repositories/get-repositories.thunk';

import { Button } from './components/button';
import classes from './pagination.module.scss';

const maxPage = 50;
const numberOfAvailablePages = 5;
const lastPageForCount = maxPage - numberOfAvailablePages;

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(({ repositoriesState: { searchValue } }) => searchValue);
  const currentPage = useAppSelector(({ repositoriesState: { page } }) => page);
  const total = useAppSelector(({ repositoriesState: { total } }) => total);
  const lastPage = Math.min(maxPage, Math.floor(total / 20));
  const availablePages = Array.from(Array(numberOfAvailablePages)).map((item, index) =>
    currentPage > lastPageForCount ? lastPageForCount + index + 1 : currentPage + index,
  );

  const handleNextPage = () => {
    const nextPage = currentPage + 1;

    dispatch(setPage(nextPage));
    dispatch(getRepositories({ name: name || 'react', page: nextPage }));
  };

  const handlePreviosPage = () => {
    const prevPage = Math.max(1, currentPage - 1);

    dispatch(setPage(prevPage));
    dispatch(getRepositories({ name: name || 'react', page: prevPage }));
  };

  const handlePage = (selectedPage: number) => {
    dispatch(setPage(selectedPage));
    dispatch(getRepositories({ name: name || 'react', page: selectedPage }));
  };

  return (
    <div className={classes.pagination}>
      <Button onClick={handlePreviosPage}>Previos</Button>
      {currentPage > numberOfAvailablePages && (
        <>
          <Button onClick={() => handlePage(1)}>1</Button> ...
        </>
      )}
      {availablePages.map((availablePage) => (
        <Button
          key={availablePage}
          onClick={() => handlePage(availablePage)}
          isActive={availablePage === currentPage}
        >
          {availablePage}
        </Button>
      ))}
      {currentPage <= lastPage - numberOfAvailablePages && (
        <>
          ... <Button onClick={() => handlePage(lastPage)}>{lastPage}</Button>
        </>
      )}
      <Button onClick={handleNextPage}>Next</Button>
    </div>
  );
};
