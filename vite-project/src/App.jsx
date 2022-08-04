import './App.css'
import React, { useEffect, useState } from 'react';
import Infos from './Infos';
import SearchBar from './SearchBar';

export default function App() {

  // function setSelected(value){
    
  // }

  const [selected, setSelected] = useState("");

  return (
    <>
      <h2>Locations</h2>
      <center><SearchBar /></center>
      <div className="react-wrapper">
        <div id='globe-container'></div>
        <div id='infos-container'>
          <Infos selected={selected} />
        </div>
        <div></div>
      </div>
    </>
  )
}

