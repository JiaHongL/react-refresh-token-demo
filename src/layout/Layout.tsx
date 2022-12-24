import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col h-screen">
      <NavBar/>
      <div className="flex-1 w-full p-3  mx-auto overflow-x-auto bg-gray-200">
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;
