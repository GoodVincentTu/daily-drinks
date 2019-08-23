import React from 'react';
import { shallow } from 'enzyme';
import OrderItem from '../../src/components/OrderItem';

const fakeDrink = {
  title: '熟成紅茶',
  price: 20,
  notes: '微糖微冰'
};

describe('<OrderItem/>', () => {
  it('renders', () => {
    shallow(<OrderItem drink={fakeDrink}/>);
  });
})