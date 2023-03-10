import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Component1() {
  const location = useLocation();

  return (
    <>
      <h1>Component 1</h1>
      <Link to="/component2">Go to Component 2</Link>
      <p>Breadcrumbs: {location.pathname}</p>
    </>
  );
}

function Component2() {
  const location = useLocation();

  return (
    <>
      <h1>Component 2</h1>
      <Link to="/component3">Go to Component 3</Link>
      <p>Breadcrumbs: 
        <Link to="/component1">Component 1</Link> / {location.pathname}
      </p>
    </>
  );
}

function Component3() {
  const location = useLocation();
  return (
    <>
      <h1>Component 3</h1>
      <p>Breadcrumbs: 
        <Link to="/component1">Component 1</Link> / 
        <Link to="/component2">Component 2</Link> / {location.pathname}
      </p>
    </>
  );
}

export { Component1, Component2, Component3 };