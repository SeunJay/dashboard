import React from 'react';
import NavBar from '../../components/nav-bar/NavBar';
import SideBar from '../../components/side-bar/SideBar';
import Home from '../home/Home';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <SideBar />
        <Home />
      </div>
    </div>
  );
};

export default Dashboard;
