import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from '../../components/nav-bar/NavBar';
import SideBar from '../../components/side-bar/SideBar';
import Home from '../home/Home';
import UserList from '../userlist/UserList';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <SideBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/users' element={<UserList />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
