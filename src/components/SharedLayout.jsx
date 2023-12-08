import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Header from '../user/dashboard/Header';
import { useDispatch } from 'react-redux';
import { getDataAnak } from '../features/kids/kids';

const SharedLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAnak());
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-coldWhite ">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Outlet sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default SharedLayout;
