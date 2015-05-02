// modeled on https://github.com/kastork/react-karma-rewire-webpack/blob/master/test/ParentChildComponent-test.js

import React from 'react/addons';
var TestUtils = React.addons.TestUtils;

import Button from '../layout-components/Button';

describe('Button', () => {

  var element;

  beforeEach(() => {
    element = TestUtils.renderIntoDocument(<Button />)
  });

  it('should render', () => {
    expect(element).toBeTruthy();
  });

  it('is a composite component', () => {
    expect(TestUtils.isCompositeComponent(element)).toBeTruthy();
  });

  it('is a Button', () => {
    expect(TestUtils.isCompositeComponentWithType(element, Button)).toBeTruthy();
  });

  it('has no child nodes', () => {
    expect(React.findDOMNode(element).children.length).toBe(0);
  });

  it('should transclude elements', () => {
    var buttonTitle = 'ButtonTitle';
    element = TestUtils.renderIntoDocument(<Button>{buttonTitle}</Button>);
    expect(React.findDOMNode(element).innerHTML).toBe(buttonTitle);
  });

});