import React from "react";
import SingleCards from "./SingleCard";

import './../assets/styles.css'

const HomePage = ({wifiSpeed}) => {
    const data = [
        {iconName:'car-sport-outline',txtMain:'Tesla',txtInfo:'80%',key:'1'},
        {iconName:'headset-outline',txtMain:'Headset',txtInfo:'80%',key:'2'},
        {iconName:'thermometer-outline',txtMain:'Temperature',txtInfo:'17°C',key:'3'},
        {iconName:'wifi-outline',txtMain:'Wifi',txtInfo:`${wifiSpeed} MB/s`,key:'4'},
    ]

    return(
        <div className='home-container'>
            <p>Smart App</p>
            <div className='card-container'>
                {data.map(item => <SingleCards {...item}/>)}
            </div>

        </div>
    )
}


export default HomePage