import './App.css';
import React from 'react';
import MapContainer from '../MapContainer/MapContainer.js';
import OptionBar from '../OptionBar/OptionBar';
import BuildingList from '../BuildingList/BuildingList';
import buildingData from '../../util/buildingData.js';

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
                    <MapContainer/>   
                </div>
            </div>
        );
    }
}

export default App;