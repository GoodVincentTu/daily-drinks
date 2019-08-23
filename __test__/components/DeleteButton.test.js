import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import DeleteButton from '../../src/components/DeleteButton';

describe('<DeleteButton/>', () => {
  it('renders', () => {
    shallow(<DeleteButton/>);
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<DeleteButton/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
})