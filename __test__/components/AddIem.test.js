import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AddItem from '../../src/components/AddItem';

describe('<AddItem/>', () => {
  it('renders', () => {
    shallow(<AddItem/>);
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<AddItem/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  })
})