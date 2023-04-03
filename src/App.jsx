import { Addcolor } from './Addcolor';
import './App.css'
import { Movielist } from './Movielist';
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { margin } from '@mui/system';
import { Movieurl } from './Movieurl';
import { Addmovie } from './Addmovie';
import { Basicform } from './Basicform';
import { Editmovie } from './Editmovie';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import Brightness4Icon from '@mui/icons-material/Brightness4';


export default function App() {
  const [moviedetails, setmoviedetails] = useState([]);
useEffect(()=>{ fetch("https://642594217ac292e3cf04af7d.mockapi.io/movieapi")
   .then((data) => data.json())
   .then((mvs) => setmoviedetails(mvs));},[]);
  

const navigate=useNavigate();
const [mode,setmode]=useState("light");
const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});
 const bgsty={
  borderRadius:"0px",
  minHeight:"100vh",
 }

return(
  <ThemeProvider theme={darkTheme}>
    <Paper sx={bgsty} elevation={4} >
  <div className='App'>
     <AppBar position="static">
        <Toolbar>
          <Button onClick={()=> navigate("/")} color="inherit">Home</Button>
          <Button onClick={()=> navigate("/movielist")} color="inherit">Movielist</Button>
          <Button onClick={()=> navigate("/addcolor")} color="inherit">Addcolor</Button>
          <Button onClick={()=> navigate("*")} color="inherit">Notfound</Button>
          <Button onClick={()=> navigate("/basicform")} color="inherit">Basicform</Button>
          <Button onClick={()=> navigate("/addmovie")} color="inherit">Addmovie</Button>
          <Button onClick={()=> navigate("")} color="inherit">Login</Button>
        
          <Button sx={{marginLeft:"auto"}} onClick={()=> setmode(mode=="light" ? "dark" : "light")} color="inherit"
          
          >{mode=== "light" ? "dark" : "light"} mode</Button>   
        </Toolbar>
      </AppBar>
      {/* <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/movielist">Movielist</Link>
      </li>
      <li>
        <Link to="/addcolor">Addcolor</Link>
      </li>
      <li>
        <Link to="*">Notfound</Link>
      </li>
    </ul>
  </nav> */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/filmlist" element={<Navigate replace to="/movielist"/>} />
    <Route path="/movielist" element={<Movielist />} />
    <Route path="/movielist/:url" element={<Movieurl moviedetails={moviedetails} />} />
    <Route path="/addcolor" element={<Addcolor />} />
    <Route path="/addmovie" element={<Addmovie moviedetails={moviedetails} setmoviedetails={setmoviedetails}/>} />
    <Route path="*" element={<Notfound />} />
    <Route path="/basicform" element={<Basicform />} />
    <Route path="/movielist/edit/:url" element={<Editmovie/>} />
  </Routes>
 {/* <Movielist moviedetails={moviedetails} setmoviedetails={setmoviedetails}/> */}
 {/* <Home /> */}
  </div>
  </Paper >
  </ThemeProvider>
);
}

function Notfound(){
  return(
    <div className='notfound'>
      <img src='https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif'/>
    </div>
  );
}
function Home(){
  return(
    <div>
      <h1>welcome to  home </h1>
    </div>
  );
}



