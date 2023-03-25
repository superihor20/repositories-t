import { useAppSelector } from '../../hooks/useAppSelector';

import { NotFound } from './components/not-found';
import { Repository } from './components/repository';
import classes from './repositories.module.scss';

export const Repositories = () => {
  const repositories = useAppSelector(({ repositoriesState: { repositories } }) => repositories);

  return (
    <div className={classes['repositories-list']}>
      {repositories.length ? (
        repositories.map((repository) => <Repository key={repository.id} repository={repository} />)
      ) : (
        <NotFound />
      )}
    </div>
  );
};
