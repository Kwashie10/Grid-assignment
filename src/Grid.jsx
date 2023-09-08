import { range } from './utils';

function Grid({ numRows, numCols }) {
  const items = range(1, numRows * numCols + 1);
  return (
    <div className="grid">
      {items.map((item) => (
        <div key={item} className="grid-item">
          {item}
        </div>
      ))}
    </div>
  );
}



export default Grid;
