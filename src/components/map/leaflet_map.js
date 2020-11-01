import React from "react";
import { Map, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import VenueMarkers from "./VenueMarkers";



export default function LeafletMapView(props) {
  const currentLocation = { lat: props.lat, lng: props.lon }
  const zoom = 12
  return (
    <Map center={currentLocation} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <VenueMarkers venues={[{
            "name": 'DataFactz',
            "geometry": [
              props.lat,
              props.lon
            ]
        }]}/>
    </Map>
  );
}