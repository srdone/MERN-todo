import React from 'react/addons';
var TestUtils = React.addons.TestUtils;
import Button from '../public/layout-components/Button.jsx'

describe('Button', () => {
  it('should render', () => {
    var element = TestUtils.renderIntoDocument(<Button />);
    expect(element).toBeTruthy();
  });
});