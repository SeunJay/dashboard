import React from 'react';

import {
  FeaturedContainer,
  FeaturedItem,
  FeaturedTitle,
  FeaturedMoneyContainer,
  FeaturedSub,
} from './featured.styles';
import { featureData } from '../../data/dummyData';
import { ArrowUpward } from '@material-ui/icons';

const Feature = () => {
  return (
    <FeaturedContainer>
      {featureData.map((data, i) => (
        <FeaturedItem key={i}>
          <FeaturedTitle>{data.title}</FeaturedTitle>
          <FeaturedMoneyContainer>
            <span className='featuredMoney'>{data.money}</span>
            <span className='featuredMoneyRate'>
              {data.moneyRate}
              <ArrowUpward className='featuredIcon' />
            </span>
          </FeaturedMoneyContainer>
          <FeaturedSub>Compared to previous month</FeaturedSub>
        </FeaturedItem>
      ))}
    </FeaturedContainer>
  );
};

export default Feature;
