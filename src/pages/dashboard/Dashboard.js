import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from '../../components/nav-bar/NavBar';
import SideBar from '../../components/side-bar/SideBar';
import Home from '../home/Home';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <SideBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
