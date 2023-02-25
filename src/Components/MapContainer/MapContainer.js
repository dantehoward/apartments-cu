import React from "react";
import './MapContainer.css';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import googleKey from "../../util/googleKey";

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
            ></Map>
        );
    }
};

export default GoogleApiWrapper({
    apiKey: googleKey.googleKey
})(MapContainer);