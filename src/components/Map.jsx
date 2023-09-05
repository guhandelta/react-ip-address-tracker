import L, { marker } from 'leaflet'

import "leaflet/dist/leaflet.css"
import MarkerIcon from "../images/icon-location.svg"
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Map = ({ coordinates }) => {
    const marker = new L.icon({ iconUrl: MarkerIcon });
    let state = {
        keyMAP: Math.random(),
    };

    // console.log(`coordinates.lat:${coordinates.lat}.......coordinates.lng:${coordinates.lat}`);
    console.log(`coordinates:${Object.entries(coordinates)}`);
    return(
            <MapContainer 
                key={state.keyMAP} 
                center={[coordinates.lat, coordinates.lng]} 
                zoom={18}
                className='w-full h-3/5 z-0'
            >
                <TileLayer
                    attribution="Google Maps"
                    url="https://google.com/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
                >
                    <Marker 
                        position={[coordinates.lat, coordinates.lng]}
                        icon={marker}
                    >
                    </Marker>
                </TileLayer>
            </MapContainer>
    );
}

export default Map