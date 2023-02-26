import React from "react";
import './MapContainer.css';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import googleKey from "../../util/googleKey";

class MapContainer extends React.Component {

    render() {
        return (
            <div>
                <Map
                    google = {this.props.google}
                    style = {{width:"100%", height:"100%"}}
                    zoom = {16}
                    initialCenter = {
                        {
                            lat: 40.10610272223939,
                            lng: -88.22725448700325
                        }
                    }
                >

                {
                    this.props.buildings.map(building => {
                        return (<Marker
                            name={building.name}
                            position ={{
                                lat: building.lat,
                                lng: building.lon
                            }}
                        />);
                    })
                }
                </Map>
                
            </div>
        );
    }
};

export default GoogleApiWrapper({
    apiKey: googleKey.googleKey
})(MapContainer);