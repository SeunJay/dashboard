import React from 'react';
import { Visibility } from '@material-ui/icons';

import { newMemberRows } from '../../data/dummyData';
import {
  SmWidgetContainer,
  SmWidgetTitle,
  SmWidgetImg,
  SmWidgetList,
  SmWidgetUser,
  SmWidgetButton,
} from './smWidget.styles';

const SmWidget = () => {
  return (
    <SmWidgetContainer>
      <SmWidgetTitle>New Members</SmWidgetTitle>
      <SmWidgetList>
        {newMemberRows.map((member) => (
          <li key={member.id} className='SmWidgetListItem'>
            <SmWidgetImg src={member.avatar} alt={member.username} />

            <SmWidgetUser>
              <span className='SmWidgetUsername'>{member.username}</span>
              <span className='SmWidgetUserTitle'>{member.occupation}</span>
            </SmWidgetUser>

            <SmWidgetButton>
              <Visibility className='SmWidgetIcon' />
              Display
            </SmWidgetButton>
          </li>
        ))}
      </SmWidgetList>
    </SmWidgetContainer>
  );
};

export default SmWidget;
