import React from 'react';
import { shallow } from 'enzyme';
import OrderList from '../../src/components/OrderList';

const fakeDrinks = [{
  title: '熟成紅茶',
  price: 20,
  notes: '微糖微冰'
}];

describe('<OrderList/>', () => {
  it('renders', () => {
    shallow(<OrderList drinks={fakeDrinks}/>);
  });
})