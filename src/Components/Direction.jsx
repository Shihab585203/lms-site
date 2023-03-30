import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";
import React, { useState } from "react";

const Direction = () => {
  const [response, setResponse] = useState(null);
  const origin = 'mirpur 10 circle dhaka';
  const destination = 'gulshan 1 circle dhaka';

const  directionsCallback = (res) => {
    console.log(res)

    if (res !== null) {
      if (res.status === 'OK') {
        setResponse(res);
      } else {
        console.log('response: ', res)
      }
    }
  }

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap
          // required
          id="direction-example"
          // required
          mapContainerStyle={{
            height: "100vh",
            width: "100vw",
          }}
          // required
          zoom={15}
          // required
          center={{
            lat: 0,
            lng: -180,
          }}         
        >
          { destination !== "" && origin !== "" && (
            <DirectionsService
              // required
              options={{
                destination: destination,
                origin: origin,
                travelMode: 'Driving',
              }}
              // required
              callback={directionsCallback}             
            />
          )}

          { response !== null && (
            <DirectionsRenderer
              // required
              options={{
                directions: this.state.response,
              }}              
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Direction;
