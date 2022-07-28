import React from 'react';
import {Outlet, Link} from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        {/* High Order Component, es un componente que recibe otro componente como hijo y devuelve otro componente diferente */}
        
    </>
  )
};

export default Layout;