# Codedex - Color Picker
Find freedom on this canvas. - Bob Ross

What’s life without color? In the world of graphics software, color pickers are to the programmer what palettes are to the painter.

With everything we’ve learned thus far about React, we will build our own color picker!

Create a new ColorPicker.jsx file in the src folder and define a functional ColorPicker component.

This component should use two state variables and a colors array:

```javascript
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
```
The selectedColor state is an object with a hex and name prop, each set to null. The focusedIndex will be an integer representing the index of the colors currently selected.

To keep things simple, we will only use six colors. Feel free to add or remove colors if you'd like!

The return function should contain the following:

```javascript
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
```
It is up to you to define the event handlers for this component, including:


```javascript
handleClick()
handleMouseEnter()
handleMouseLeave()
handleFocus()
handleBlur()
handleKeyDown()
```