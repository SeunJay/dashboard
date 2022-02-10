import React from 'react';
import NavBar from '../components/nav-bar/NavBar';
import SideBar from '../components/side-bar/SideBar';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <SideBar />
      </div>
    </div>
  );
};

export default Dashboard;
