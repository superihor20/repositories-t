import { Repository as RepositoryType } from '../../../../api/repository/repository.schema';
import star from '../../../../assets/icons/star.svg';
import watcher from '../../../../assets/icons/watcher.svg';

import classes from './repository.module.scss';

type RepositoryProps = {
  repository: RepositoryType;
};

export const Repository: React.FC<RepositoryProps> = ({ repository }) => {
  return (
    <div className={classes['repository-item']}>
      <div className={classes.avatar}>
        <img src={repository.owner.avatar_url} alt={repository.name} />
      </div>
      <div className={classes.info}>
        <div className={classes['info-left']}>
          <h3 className={classes.name}>{repository.name}</h3>
          <p className={classes['info-text']}>{repository.owner.login}</p>
          <p className={classes['info-text']}>{repository.language}</p>
          <p className={classes['additional-text']}>{repository.description}</p>
        </div>
        <div className={classes['info-right']}>
          <div className={classes['info-stat']}>
            <img src={star} alt="star" />
            <span className={classes['heading-text']}>{repository.stargazers_count} stars</span>
          </div>
          <div className={classes['info-stat']}>
            <img src={watcher} alt="watcher" />
            <span className={classes['heading-text']}>{repository.watchers_count} watchers</span>
          </div>
        </div>
      </div>
    </div>
  );
};
