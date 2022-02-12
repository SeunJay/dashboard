import React from 'react';

import Feature from '../../components/featured/Feature';
import Chart from '../../components/chart/Chart';
import { HomeContainer } from './home.styles';
import { userData } from '../../data/dummyData';

const Home = () => {
  return (
    <HomeContainer>
      <Feature />
      <Chart
        data={userData}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
    </HomeContainer>
  );
};

export default Home;
