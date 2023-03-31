import { useState } from 'react';

export function Addcolor() {
  const [color, setcolor] = useState("");
  const styles = {
    background: color,
  };
  const [colorlist, setcolorlist] = useState(["red", "green", "blue", "orange"]);
  return (
    <div>
      <input style={styles} type="text" onChange={(event) => setcolor(event.target.value)} value={color} />
      <button onClick={() => setcolorlist([...colorlist, color])}>Add color</button>
      {colorlist.map((clr) => (<Box color={clr} />))}
    </div>
  );
}
function Box({ color }) {
  const ppp = {
    width: "250px",
    height: "30px",
    margin: "5px 0px",
    background: color,
  };
  return (
    <div style={ppp}></div>
  );
}
