import React from 'react';
import { shallow } from 'enzyme';
import Anchor from './Anchor';
import { findByTestAttr, checkProps } from '../../../test/testUtils';

const defaultProps = { children: 'Link', to: '/' };
/**
 * Factory function to create a ShallowWrapper for the Anchor component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Anchor {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  const anchorComponent = findByTestAttr(wrapper, 'component-anchor');
  expect(anchorComponent).toHaveLength(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Anchor, defaultProps);
});
