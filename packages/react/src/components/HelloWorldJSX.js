// React Component declaration in JSX
import React from 'react'
import './HelloWorld.css'

export default function HelloWorldJSX(props) {
  return (
    <h1 className="greeting">
      Hello {props.name}
    </h1>
  );
}
