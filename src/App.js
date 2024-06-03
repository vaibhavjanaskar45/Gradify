
import './App.css';
import Menu from './component/Menu';
import Navbar from './component/Navbar';
import React, {useState} from 'react';
import SgpaToCgpa from './component/SgpaToCgpa';


function App() {

  const [mode,setMode] = useState ('light');
  const [modeText,setModeText] = useState ('dark');
  
  const setModeFunction=()=>{
    if(mode === 'light'){
      setMode('dark')
      setModeText('light')
      document.body.style.backgroundColor='black';
     
 
    }
   else{
      setMode('light')
      setModeText('Dark')
      document.body.style.backgroundColor='white';
      
      
    }
  }
  
  return (
    <>
     
   
    <Navbar title='Gradify' mode={mode} setModeFunction={setModeFunction} modeText={modeText} />

    <Menu mode={mode} />
    <SgpaToCgpa mode={mode}/>
    </>

  );
}

export default App;
