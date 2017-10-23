import { GoogleMap, Marker } from "react-google-maps";

export default class Map extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >

      </GoogleMap>
    );
  }
}