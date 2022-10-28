import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export const MapGoggle = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDxXuyeRwyZoYReECZWb45YquFCz7hiDiI",
  });
  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{
            lat: -29.457151,
            lng: -49.923188,
          }}
          zoom={15}
        ></GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};
