import * as React from "react";
import { Marker, Popup } from "react-leaflet";
import { LocationData } from "../types";
import markerIcon from "../assets/marker-icon.svg";
import { Icon } from "leaflet";

interface LocationMarkerProps {
  marker: LocationData;
}

const LocationMarker = ({ marker }: LocationMarkerProps) => {
  const currentLocation = {
    lat: marker.coordinates.latitude,
    lng: marker.coordinates.longitude,
  };

  return (
    <Marker
      position={currentLocation}
      icon={
        new Icon({
          iconUrl: markerIcon,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [0, -35],
        })
      }
    >
      <Popup>
        A pretty info popup <br /> Will finish this later.
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
