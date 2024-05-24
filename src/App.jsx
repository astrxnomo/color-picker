import { useState } from 'react'
import './App.css'

function App() {
  const [selectedColor, setSelectedColor] = useState({ hex: null, name: null });
  const [focusedIndex, setFocusedIndex] = useState(null);

  const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Magenta", hex: "#FF00FF" },
  ];

  function handleClick(color) {
    setSelectedColor(color);
  }

  function handleMouseEnter(colorHex) {
    setSelectedColor({ hex: colorHex });
  }
  function handleMouseLeave() { 
    setSelectedColor({ hex: null, name: null});
  }
  
  function handleFocus(index) {
      setFocusedIndex(index);
      setSelectedColor(colors[index]);
  }

  function handleBlur() {
    setSelectedColor({ hex: null, name: null});
  }

  function handleKeyDown(e, index) {

    if (e.key === 'Enter') {
      setFocusedIndex(0);
      setSelectedColor(colors[0]);
    }

    if (e.key === 'ArrowRight') {
        setFocusedIndex(focusedIndex + 1);
        setSelectedColor(colors[focusedIndex + 1]);
      }
  
  
    if (e.key === 'ArrowLeft') {
      setFocusedIndex(focusedIndex - 1);
      setSelectedColor(colors[focusedIndex - 1]);
    } 
}

  
  return (
    <>
      <div className="color-picker">
        <h1>Color Picker</h1>
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`color-item ${focusedIndex === index ? 'focused' : ''}`}
              style={{ backgroundColor: color.hex }}
              onClick={() => handleClick(color)}
              onMouseEnter={() => handleMouseEnter(color.hex)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              onKeyDown={(e) => handleKeyDown(e, index)}
              tabIndex={0}
            >
              {selectedColor.hex === color.hex && (
                <span className="color-code">{selectedColor.name || color.hex}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
