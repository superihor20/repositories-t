import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setPage } from '../../store/repositories';
import { getRepositories } from '../../store/repositories/get-repositories.thunk';
import { getPage, getSearchValue, getTotal } from '../../store/repositories/repository.selectors';

import { Button } from './components/button';
import classes from './pagination.module.scss';

const maxPage = 50;
const numberOfAvailablePages = 5;
const lastPageForCount = maxPage - numberOfAvailablePages;

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(getSearchValue) || 'react';
  const currentPage = useAppSelector(getPage);
  const total = useAppSelector(getTotal);

  const lastPage = Math.min(maxPage, Math.floor(total / 20));
  const availablePages = Array.from(Array(numberOfAvailablePages)).map((item, index) =>
    currentPage > lastPageForCount ? lastPageForCount + index + 1 : currentPage + index,
  );

  const chandleChangePage = (newPage: number) => {
    dispatch(setPage(newPage));
    dispatch(getRepositories({ name, page: newPage }));
  };

  const handleNextPage = () => {
    const nextPage = Math.min(currentPage + 1, lastPage);

    chandleChangePage(nextPage);
  };

  const handlePreviosPage = () => {
    const prevPage = Math.max(1, currentPage - 1);

    chandleChangePage(prevPage);
  };

  return (
    <div className={classes.pagination}>
      <Button onClick={handlePreviosPage}>Previos</Button>
      {currentPage > numberOfAvailablePages && (
        <>
          <Button onClick={() => chandleChangePage(1)}>1</Button> ...
        </>
      )}
      {availablePages.map((availablePage) => (
        <Button
          key={availablePage}
          onClick={() => chandleChangePage(availablePage)}
          isActive={availablePage === currentPage}
        >
          {availablePage}
        </Button>
      ))}
      {currentPage <= lastPage - numberOfAvailablePages && (
        <>
          ... <Button onClick={() => chandleChangePage(lastPage)}>{lastPage}</Button>
        </>
      )}
      <Button onClick={handleNextPage}>Next</Button>
    </div>
  );
};
