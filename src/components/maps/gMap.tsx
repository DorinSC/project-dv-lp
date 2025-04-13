import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

// Replace with your actual office coordinates
const officeLocation = {
  lat: 47.76615930093167, // number
  lng: 27.904786992024466, // number
};

const GMap: React.FC = () => {
  console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={officeLocation}
        zoom={15}
      >
        <Marker position={officeLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GMap;
