import React from 'react';

import {
  LgWidgetContainer,
  LgWidgetTitle,
  LgWidgetButton,
  LgWidgetTable,
  LgWidgetTh,
  LgWidgetUser,
  LgWidgetImg,
  LightTd,
} from './lgWidget.styles';
import { lastTransctionRows } from '../../data/dummyData';

const LgWidget = () => {
  return (
    <LgWidgetContainer>
      <LgWidgetTitle>Latest Transaction</LgWidgetTitle>

      <LgWidgetTable>
        <tbody>
          <tr>
            <LgWidgetTh>Customer</LgWidgetTh>
            <LgWidgetTh>Date</LgWidgetTh>
            <LgWidgetTh>Amount</LgWidgetTh>
            <LgWidgetTh>Status</LgWidgetTh>
          </tr>
          {lastTransctionRows.map((item) => (
            <tr key={item.username}>
              <LgWidgetUser>
                <LgWidgetImg src={item.avatar} alt={item.username} />
                <span>{item.username}</span>
              </LgWidgetUser>
              <LightTd>{item.date}</LightTd>
              <LightTd>{item.transaction}</LightTd>
              <td>
                <LgWidgetButton bgColor={item.bgColor}>
                  {item.type}
                </LgWidgetButton>
              </td>
            </tr>
          ))}
        </tbody>
      </LgWidgetTable>
    </LgWidgetContainer>
  );
};

export default LgWidget;
