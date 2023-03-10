import React, { useState } from 'react';

function Rectangle() {
  const [width, setWidth] = useState(100);
  const [color, setColor] = useState('#000000');
  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  }
  const handleColorChange = (event) => {
    setColor(event.target.value);
  }
  const rectangleStyle = {
    height: '200px',
    width: `${width}px`,
    backgroundColor: color
  };
  return (
    <>
      <label htmlFor="width">Width:</label>
      <input type="number" id="width" name="width" value={width} onChange={handleWidthChange} />
      <label htmlFor="color">Color:</label>
      <input type="color" id="color" name="color" value={color} onChange={handleColorChange} />
      <div style={rectangleStyle}></div>
    </>
  );
}
export default Rectangle;