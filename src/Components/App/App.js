import './App.css';
import React from 'react';
import MapContainer from '../Map/MapContainer.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <h1 text-align="center">Apartments CU</h1>
                <div>
                    <MapContainer></MapContainer>   
                </div>
            </div>
        );
    }
}

export default App;