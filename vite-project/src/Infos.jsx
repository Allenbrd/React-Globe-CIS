import { useState } from "react";

export default function Infos(props){


    return(
        <>
            {
                props.selected == "" ?
                    <><h2>Location</h2><p>Select your prefered location using the search bar!</p></>
                : null
            }
        </>
    );
}