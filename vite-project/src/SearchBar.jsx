import { useState, useEffect } from "react";

export default function SearchBar(props){


    const locations = [
        {
            location: "France",
            z: 400,
            x: 0,
            y: 150
        },
        {
            location: "United Kingdom",
            lat: 51.5286417,
            lng: -0.1015987,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Lebanon",
            lat: 33.9088451,
            lng: 35.5819893,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "United Arab Emirates",
            lat: 25.0760224,
            lng: 55.227488,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Jordan",
            lat: 31.2798856,
            lng: 37.1226271,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Iraq",
            lat: 33.2209264,
            lng: 43.714387,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Morocco",
            lat: 31.8008346,
            lng: 7.150688,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Algeria",
            lat: 36.7390184,
            lng: 3.1393309,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Tunisia",
            lat: 36.8384725,
            lng: 10.1705345,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Libya",
            lat: 32.8829369,
            lng: 13.1883359,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Mali",
            lat: 16.7713836,
            lng: -3.0079794,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Togo",
            lat: 6.1823217,
            lng: 1.2466908,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Niger",
            lat: 13.5127689,
            lng: 2.1190327,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Chad",
            lat: 12.1202182,
            lng: 15.057459,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Senegal",
            lat: 14.7110245,
            lng: -17.465825,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Burkina Faso",
            lat: 12.3584921,
            lng: -1.5368433,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Ivory Coast",
            lat: 6.816067,
            lng: -5.2811359,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Ghana",
            lat: 5.5912087,
            lng: -0.1797295,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Benin",
            lat: 6.4959514,
            lng: 2.6222992,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Nigeria",
            lat: 6.5480551,
            lng: 3.2839596,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Cameroon",
            lat: 3.8303052,
            lng: 11.5104532,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Equatorial Guinea",
            lat: 3.755447,
            lng: 8.7416777,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Gabon",
            lat: 0.4112103,
            lng: 9.4346296,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Congo",
            lat: -4.2471951,
            lng: 15.2272225,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Democratic Republic of Congo",
            lat: -4.4013038,
            lng: 15.3227446,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Uganda",
            lat: 0.3130294,
            lng: 32.5991254,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Kenya",
            lat: -1.303209,
            lng: 36.8473969,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Rwanda",
            lat: -1.9297706,
            lng: 30.1272445,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Tanzania",
            lat: -6.1729476,
            lng: 35.7731502,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Angola",
            lat: -8.8535324,
            lng: 13.2841045,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Namibia",
            lat: -22.5637563,
            lng: 17.062226,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Botswana",
            lat: -24.6093072,
            lng: 25.9305045,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "South Africa",
            lat: -25.75865,
            lng: 28.1979505,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Reunion",
            lat: -20.946304,
            lng: 55.52336,
            size: 0.1,
            color: "#eeff02",
          },
          {
            location: "Mauritius",
            lat: -20.1629811,
            lng: 57.4967765,
            size: 0.1,
            color: "#eeff02",
          },
    ]

    const [items, setItems] = useState([]);

    const [shown, setShown] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {

        document.addEventListener('click', function handleClickOutsideBox(event) {
            const box = document.getElementById('topSearchBox');
          
            if (!box.contains(event.target)) {
                setShown(false);
            }
          });
    }, []);

    function show(){
        setShown(true);
    }

    function select(location){
        document.getElementById("locationSearch").value = location;
        setShown(false);
        // Props.setSelected
    }


    useEffect(() => {
        setItems(locations.filter((data)=>{
            if(searchValue == null)
                return data
            else if(data.location.toLowerCase().includes(searchValue.toLowerCase())){
                return data
            }
        }))
    }, [searchValue]);
        

    return(
        <div id="topSearchBox" onFocus={show}>
            <input placeholder="Search" className="location-search-input" id="locationSearch" onChange={e => setSearchValue(e.target.value)} />
            {
                shown ?
                <div className="location-search-results">
                    {
                        items ? items.map( (element) => 
                        (
                    
                                <div key={element.location +"link"} onClick={e => select(e.target.innerHTML)}>
                                    {element.location} 
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
