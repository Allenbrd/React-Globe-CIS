import { useState, useEffect } from "react";
import PinSVG from "./files/bx-map-pin.svg";
import PhoneSVG from './files/bx-phone.svg';
import MobileSVG from './files/bx-mobile.svg';
import EmailSVG from './files/bx-envelope.svg';
import GlobeSVG from './files/bx-globe.svg';
import Hiperdist from "./files/Hiperdist.png";
import CIS from "./files/CIS.png";
import Scriptera from "./files/Scriptera.png";
import locations from './files/locations.json';

export default function Infos(props){

    const [selected, setSelected] = useState("");
    const [toberendered, setToberendered] = useState([]);

    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    let rendering = <></>;

    useEffect(() => {
        rendering = [];
        setToberendered(rendering);
        if(document.getElementById("location-info")){
            document.getElementById("location-info").innerHTML = null;
        }
        setSelected(document.getElementById("locationSearch").value);

        if(props.selected != ""){
            
            for(let i = 0;i<Object.size(locations[0][document.getElementById("locationSearch").value].locations);i++){
                
                rendering = <><div>{Object.keys(locations[0][document.getElementById("locationSearch").value].locations)[i]}</div></>;
                
                for(let n = 0;n<locations[0][document.getElementById("locationSearch").value].locations[Object.keys(locations[0][document.getElementById("locationSearch").value].locations)[i]].address.length;n++){
                    
                    let location = locations[0][document.getElementById("locationSearch").value].locations[Object.keys(locations[0][document.getElementById("locationSearch").value].locations)[i]];

                    rendering = <>{rendering} <span className="side-info-label"><img className="map-pin-img" src={PinSVG} alt="map pin" /></span><address className="side-info">{location.address[n]}</address></>

                    if(location.tel && location.tel[n] != ""){
                        rendering = <>{rendering} <span className="side-info-label"><img className="map-pin-img" src={PhoneSVG} alt="phone" /></span><span className="side-info">{location.tel[n]}</span></>;
                    }

                    if(location.mobile && n==0){
                        rendering = <>{rendering} <span className="side-info-label"><img className="map-pin-img" src={MobileSVG} alt="mobile" /></span><span className="side-info">{location.mobile}</span></>;
                    }

                    if(location.fax && location.fax[n] != ""){
                        rendering = <>{rendering} <span className="side-info-label">Fax: </span><span className="side-info">{location.fax[n]}</span></>;
                    }

                    if(location.email && n==0){
                        rendering = <>{rendering} <span className="side-info-label"><img className="map-pin-img" src={EmailSVG} alt="envelope" /></span><span className="side-info">{location.email}</span></>;
                    }

                    if(location.POBox && location.POBox[n] != ""){
                        rendering = <>{rendering} <span className="side-info-label">PO Box: </span><span className="side-info">{location.POBox[n]}</span></>;
                    }

                    if(location.website && n==0){
                        rendering = <>{rendering} <span className="side-info-label"><img className="map-pin-img" src={GlobeSVG} alt="globe" /></span><span className="side-info"><a href={"https://"+location.website}>{location.website}</a></span></>;
                    }

                }
                toberendered.push(rendering);

            }
            setToberendered(toberendered)
        }
        
        

    }, [props.selected])
    

    return(
        <>
            {
                selected == "" ?
                    <><h2>Location</h2><p>Select your prefered location using the search bar!</p></>
                :
                <>
                <h2>{locations[0][selected].title}</h2>

                <div className="location-bus" id="location-info">
                    {toberendered}
                </div>
                </>
        }</>
    );
}