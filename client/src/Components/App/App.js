import './App.css';
import React from 'react';
import MapContainer from '../MapContainer/MapContainer.js';
import OptionBar from '../OptionBar/OptionBar';
import BuildingList from '../BuildingList/BuildingList';

const buildingData = require('../../util/buildings.json');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='container'>
                <OptionBar/>
                <div className='content'>
                    <BuildingList buildings={buildingData}/>
                    <MapContainer buildings={buildingData}/>   
                </div>
            </div>
        );
    }
}

export default App;