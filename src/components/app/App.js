import { useState } from 'react'
import './App.css';

const App = () => {

  const [gridValues, setGridValues] = useState({
    rows: 10,
    cols: 10,
    grid: [],
  })

  let grid = [];

  for (let row = 0; row < gridValues.rows; row++) {
    for (let col = 0; col < gridValues.cols; col++) {
      grid.push({
        row,
        col,
      })
    }
  }

  setGridValues({ grid: grid, ...gridValues })

  const gridItems = gridValues.grid.map((grid) => {
    return <div
      key={grid.row.toString() + '-' + grid.col.toString()}
      className="grid-item" ></div>
  })

  return (
    <div className="snake-container">
      <div className="grid">{gridItems}</div>
    </div>
  );
}

export default App;
