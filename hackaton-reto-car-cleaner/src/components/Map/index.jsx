import React, {useState} from "react"
import './style.css'
import ReactMapGL, {GeolocateControl} from 'react-map-gl';

import dotenv from "dotenv"
 dotenv.config()

const MapComponent = () => {
    const [viewport, setViewport] = useState(
        {
            width: 400,
            height: 450,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    )

    return (
        <div> 
            <ReactMapGL {...viewport}
                onViewportChange={(viewport)=> setViewport(viewport)}
                mapboxApiAccessToken={process.env.REACT_APP_MAP_KEY}>
                <GeolocateControl
                    positionOptions={{enableHighAccuracy: true}}
                    trackUserLocation={true}
                />  
            </ReactMapGL> 
        </div>

    )
  }

  export default MapComponent
