
import Rectangle from './Comp/Rectangle';
import ParkingSlots from './Comp/ParkingSlots';
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import { Component1, Component2, Component3 } from './Comp/Components';

import './App.css';

function App() {
  return (
    <div className="App">
      <Rectangle/>
      <ParkingSlots/>[]
      <Router>
      <nav>
        <ul>
          <li>
            <Link to="/component1">Component 1</Link>
          </li>
          <li>
            <Link to="/component2">Component 2</Link>
          </li>
          <li>
            <Link to="/component3">Component 3</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/component1" element={<Component1 />} />
        <Route path="/component2" element={<Component2 />} />
        <Route path="/component3" element={<Component3 />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
