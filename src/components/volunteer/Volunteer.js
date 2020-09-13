import React from "react";
import "./volunteer.css";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
const mapStyles = {
  width: "100%",
  height: "100%",
};
export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        <Marker position={{ lat: 48.0, lng: -122.0 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD75zXN3C4YUIVfiGTYF809O6Flg6SAHYE",
})(MapContainer);
