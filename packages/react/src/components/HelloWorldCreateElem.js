import React from 'react';
import './HelloWorld.css';

// React Component declaration (plain JS)
export default function HelloWorldCreateElem(props) {
  return React.createElement(
    // Component's VDom properties
    'h1',
    {className: 'greeting'},
    "Hello",
    props.name
  );
}
