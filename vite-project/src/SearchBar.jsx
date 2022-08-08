import { useState, useEffect } from "react";
import locations from './files/locations.json';

export default function SearchBar(props){


    
    const [items, setItems] = useState([]);

    const [locationsArr, setLocationsArr] = useState([]);

    const [show, setShow] = useState(false)

    useEffect(() => {

if(window.innerWidth < 950){

}
    
          setLocationsArr([]);
          setItems([]);

          var arrayy = [];

          Object.keys(locations[0]).map(function (key) {
            var element = {}; 
            arrayy.push({key});
          })

          let sorted = Object.keys(arrayy).map(function(key)  
          {  
           return arrayy[key].key;  
         });

         setLocationsArr(sorted);
          setItems(sorted);

    }, []);

    function select(location){
        document.getElementById("locationSearch").value = location;
        props.changeSelected();
        setShow(false);
    }

    function search(value){
      if(document.getElementById("BUFilter").value == ""){
        setItems(locationsArr.filter((data)=>{
          if(data.toLowerCase().includes(value.toLowerCase())){
             return data
           }
       }))
      }else{
        setItems(locationsArr.filter((data)=>{
          if(data.toLowerCase().includes(value.toLowerCase()) && locations[0][data].locations.hasOwnProperty(document.getElementById("BUFilter").value)){
             return data
           }
       }))
      }
      
    }

    function filterByBU(value, locations){
      // console.log(locations[0]["Senegal"].locations);
      if(document.getElementById("locationSearch").value.replace(/\s/g, '') == ""){
        if(value == ""){
          setItems(locationsArr);
        }else{
          setItems(locationsArr.filter((data)=>{
            if(locations[0][data].locations.hasOwnProperty(value)){
              return data
            }
          }))
        }
        
      }else if(value != ""){
        setItems(items.filter((data)=>{
          if(locations[0][data].locations.hasOwnProperty(value)){
            return data
          }
        }))
      }else{
        setItems(locationsArr.filter((data)=>{
          if(data.toLowerCase().includes(document.getElementById("locationSearch").value.toLowerCase())){
             return data
           }
       }))
      }
    }

    return(
        <div>
            <input onFocus={() => {setShow(true)}}  autoComplete="off" placeholder="Search" className="location-search-input" id="locationSearch" onChange={e => search(e.target.value)} />
            <select placeholder="Business Unit" className="bu-search-input" id="BUFilter" onChange={e => filterByBU(e.target.value, locations)}>
              <option value="">All</option>
              <option value="Hiperdist">Hiperdist</option>
              <option value="Superdist">Superdist</option>
              <option value="CIS">CIS</option>
              <option value="Superdist">SMS</option>
              <option value="Scriptera">Scriptera</option>
            </select>
            {
              
              window.innerWidth > 950 ?

                <div className="location-search-results">
                {
                        items ? items.map( (element) => 
                        (
                    
                                <div key={element+"key"+Math.random().toString()} onClick={e => select(e.target.innerHTML)}>
                                    {element} 
                                </div>
                          
                        ))
                        :
                        null

                    }
                </div>
                : show == true ?

                <div className="location-search-results"  onBlur={() => {setShow(false)}}>
                {
                        items ? items.map( (element) => 
                        (
                    
                                <div key={element+"key"+Math.random().toString()} onClick={e => select(e.target.innerHTML)}>
                                    {element} 
                                </div>
                          
                        ))
                        :
                        null

                    }
                </div>

                : null



              }

              

        </div>
    );
}
