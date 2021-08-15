import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../components/Layout';

export default function PublicRoute({
  Component,
  restricted,
  isLayout,
  ...rest
}) {
  if (isLayout) {
    return (
      <Layout>
        <Route {...rest} render={(props) => <Component {...props} />} />
      </Layout>
    );
  }
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
