import './App.css';
import React from 'react';
import MapContainer from '../Map/MapContainer.js';
import OptionBar from '../OptionBar/OptionBar';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <OptionBar/>
                <div>
                    <MapContainer></MapContainer>   
                </div>
            </div>
        );
    }
}

export default App;