import React from 'react';
import { shallow } from 'enzyme';
import AddItem from '../../src/components/AddItem';

describe('<AddItem/>', () => {
  it('renders', () => {
    shallow(<AddItem/>);
  });
})