import './App.css'
import React, { useEffect, useState } from 'react';
import Infos from './Infos';
import SearchBar from './SearchBar';

export default function App() {


  const [selected, setSelected] = useState("");

  
  function changeSelected(){
    setSelected(document.getElementById("locationSearch").value);
  }

  return (
    <>
      <h2>Locations</h2>
      <div className="react-wrapper">
        <div id='search-container'>
        <SearchBar changeSelected={changeSelected} />
        </div>
        <div id='globe-container'></div>
        <div id='infos-container'>
          <Infos selected={selected} />
        </div>
        <div></div>
      </div>
    </>
  )
}

