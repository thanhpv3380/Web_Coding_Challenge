import Create from '../pages/Create';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

import routes from '../constants/route';

export default [
  {
    path: routes.HOME,
    component: Home,
    exact: true,
    restricted: false,
    isPrivate: false,
    isLayout: true,
  },
  {
    path: routes.CREATE,
    component: Create,
    exact: true,
    restricted: false,
    isPrivate: false,
    isLayout: true,
  },
  {
    path: routes.DETAIL,
    component: Detail,
    exact: true,
    restricted: false,
    isPrivate: false,
    isLayout: false,
  },
];
