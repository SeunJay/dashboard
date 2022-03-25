import React from 'react';

import Feature from '../../components/featured/Feature';
import Chart from '../../components/chart/Chart';
import { HomeContainer, HomeWidget } from './home.styles';
import { userData } from '../../data/dummyData';
import SmWidget from '../../components/sm-widget/SmWidget';
import LgWidget from '../../components/lg-widget/LgWidget';

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
      <HomeWidget>
        <SmWidget />
        <LgWidget />
      </HomeWidget>
    </HomeContainer>
  );
};

export default Home;
