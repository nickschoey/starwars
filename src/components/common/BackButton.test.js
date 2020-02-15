import React from 'react';
import { shallow } from 'enzyme';
import BackButton from './BackButton';
import { findByTestAttr } from '../../../test/testUtils';
import 'jest-styled-components';

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({ goBack: () => {} })
  };
});
/**
 * Factory function to create a ShallowWrapper for the BackButton component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<BackButton />);
};

test('renders without error', () => {
  const wrapper = setup();
  const backButtonComponent = findByTestAttr(wrapper, 'component-backButton');
  expect(backButtonComponent).toHaveLength(1);
});
