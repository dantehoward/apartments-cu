import './App.css';
import React from 'react';
import MapContainer from '../MapContainer/MapContainer.js';
import OptionBar from '../OptionBar/OptionBar';
import BuildingList from '../BuildingList/BuildingList';

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
                    <BuildingList/>
                    <MapContainer/>   
                </div>
            </div>
        );
    }
}

export default App;