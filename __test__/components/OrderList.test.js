import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
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

  it('matches the snapshot', () => {
    const wrapper = shallow(<OrderList/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
})