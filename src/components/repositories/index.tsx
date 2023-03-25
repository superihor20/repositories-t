import { useAppSelector } from '../../hooks/useAppSelector';

import { Repository } from './components/repository';
import classes from './repositories.module.scss';

export const Repositories = () => {
  const repositories = useAppSelector(({ repositoriesState: { repositories } }) => repositories);

  return (
    <div className={classes['repositories-list']}>
      {repositories.map((repository) => (
        <Repository key={repository.id} repository={repository} />
      ))}
    </div>
  );
};
