import { Repositories } from '../repositories';
import { Search } from '../search';

import classes from './app.module.scss';

export const App = () => {
  return (
    <div className={classes['app-wrapper']}>
      <Search />
      <Repositories />
    </div>
  );
};
