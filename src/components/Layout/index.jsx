import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import route from '../../constants/route';

export default function Layout({ children }) {
  const location = useLocation();
  const [activeName, setActiveName] = useState('/');
  useEffect(() => {
    if (location.pathname === '/create') {
      setActiveName(location.pathname);
    }
  }, [location]);

  return (
    <div>
      <div className="tabs is-centered">
        <ul>
          <li className={activeName === '/' && 'is-active'}>
            <Link to={route.HOME}>Home</Link>
          </li>
          <li className={activeName === '/create' && 'is-active'}>
            <Link to={route.CREATE}>Create</Link>
          </li>
        </ul>
      </div>
      <div className="mg-medium">{children}</div>
    </div>
  );
}
