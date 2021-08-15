import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import routes from '../constants/route';
import appRoutes from './appRoutes';
import PublicRoute from './PublicRoute';

export default () => (
  <BrowserRouter>
    <Switch>
      {appRoutes.map(
        ({ path, isLayout, exact = true, component: Component, ...rest }) => {
          return (
            <PublicRoute
              key={path}
              exact={exact}
              path={path}
              component={Component}
              {...rest}
              isLayout
            />
          );
        },
      )}

      <Redirect to={routes.HOME} />
    </Switch>
  </BrowserRouter>
);
