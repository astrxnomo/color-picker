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
    setSelectedColor(colors[index]);
  }

  function handleBlur() {
    setSelectedColor({ hex: null, name: null});
  }

function handleKeyDown(e) {
    let newIndex = focusedIndex;

    if (e.key === 'ArrowRight') {
        newIndex = focusedIndex + 1;
    } else if (e.key === 'ArrowLeft') {
        newIndex = focusedIndex - 1;
    }

    if (newIndex < 0 || newIndex >= colors.length) return;

    setFocusedIndex(newIndex);
    setSelectedColor(colors[newIndex]);
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
