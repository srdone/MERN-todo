import React from 'react/addons';
var TestUtils = React.addons.TestUtils;

import Table from '../layout-components/Table';
import TableHeader from '../layout-components/TableHeader';
import TableRow from '../layout-components/TableRow';

describe('Table', () => {

  var element, headers, data, caption, row;

  beforeEach(() => {
    caption = 'Caption';
    headers = ['one', 'two', 'three'];
    element = TestUtils.renderIntoDocument(<Table caption={caption} headers={headers} />);
  });

  it('should render', () => {
    expect(element).toBeTruthy();
  });

  it('should be a composite component', () => {
    expect(TestUtils.isCompositeComponent(element)).toBeTruthy();
  });

  it('is a Table', () => {
    expect(TestUtils.isCompositeComponentWithType(element, Table)).toBeTruthy();
  });

  it('should have expected basic nodes', () => {
    element = TestUtils.renderIntoDocument(<Table headers={headers} />);

    expect(React.findDOMNode(element).tagName.toLowerCase()).toBe('table');
    expect(React.findDOMNode(element).children[0].tagName.toLowerCase()).toBe('thead');
    expect(React.findDOMNode(element).children[1].tagName.toLowerCase()).toBe('tbody');
  });

  it('should render a caption when given the caption prop', () => {
    element = TestUtils.renderIntoDocument(<Table caption={caption} headers={headers}  />);

    expect(React.findDOMNode(element).children[0].tagName.toLowerCase()).toBe('caption');
    expect(React.findDOMNode(element).children[0].innerHTML).toBe(caption);
  });

  it('should render a TableHeader', () => {
    var child = React.findDOMNode(element).children[0];

    expect(TestUtils.isCompositeComponentWithType(child, TableHeader));
  });

  //it('should render children', () => {
  //  var child = React.findDOMNode(element).children[2].children[0];
  //
  //  expect(child.tagName.toLowerCase()).toBe('tr');
  //});

});