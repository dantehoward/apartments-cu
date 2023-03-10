import React from 'react';
import './Building.css';

class Building extends React.Component {
    render() {
        return (
            <div className="Building">
                <div className="Building-information">
                    <h3>{this.props.building.name}</h3>
                    <p>{this.props.building.address}</p>
                    <p>{this.props.building.company}</p>
                </div>
            </div>
        );
    }
}

export default Building;