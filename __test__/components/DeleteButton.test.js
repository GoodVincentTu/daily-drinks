import React from 'react';
import { shallow } from 'enzyme';
import DeleteButton from '../../src/components/DeleteButton';

describe('<DeleteButton/>', () => {
  it('renders', () => {
    shallow(<DeleteButton/>);
  });
})