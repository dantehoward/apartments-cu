import React from "react";
import Building from "../Building/Building";
import './BuildingList.css';

class BuildingList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="BuildingList">
                <h1>BuildingList</h1>
                {
                    this.props.buildings.map(building => {
                        return <Building building={building} key={building.id}/>
                    })
                }
            </div>
        );
    }
}

export default BuildingList;