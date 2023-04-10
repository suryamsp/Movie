import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export function Addcolor() {
  const [color, setcolor] = useState("");
  const styles = {
    background: color,
  };
  const [colorlist, setcolorlist] = useState(["red", "green", "blue", "orange"]);
  return (
    <div className='color-form'>
      <TextField style={styles} type="text" onChange={(event) => setcolor(event.target.value)} value={color} />
      <Button  variant="contained" onClick={() => setcolorlist([...colorlist, color])}>Add color</Button>
      {colorlist.map((clr) => (<Boxs color={clr} />))}
    </div>
  );
}
function Boxs({ color }) {

  return (
    
      <div className='addcolor' style={{background: color}} ></div>
    
    
  );
}
