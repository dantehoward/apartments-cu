import './OptionBar.css';
import React from 'react';

class OptionBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {minPrice: 0, maxPrice: 5000, numBedrooms: 4, numBathrooms: 4};
        this.changeMin = this.changeMin.bind(this);
        this.changeMax = this.changeMax.bind(this);
        this.changeNumBedrooms = this.changeNumBedrooms.bind(this);
        this.changeBathrooms = this.changeBathrooms.bind(this);
    }

    changeMin(event) {
        this.setState({minPrice: event.target.value});
    }
    changeMax(event) {
        this.setState({maxPrice: event.target.value});
    }
    changeNumBedrooms(event) {
        this.setState({ numBedrooms: event.target.value });
    }
    changeBathrooms(event) {
        this.setState({ numBathrooms: event.target.value });
    }

    render() {
        return (
            <div>
                <h1 text-align="center">Apartments CU</h1>
                <div className="options">
                    <label htmlFor="minInput">Minimum Price </label>
                    <input
                        id="minInput"
                        type="number"
                        value={this.state.minPrice}
                        onChange={this.changeMin}
                    />

                    <label htmlFor="maxInput">Maximum Price </label>
                    <input
                        id="maxInput"
                        type="number"
                        value={this.state.maxPrice}
                        onChange={this.changeMax}
                    />

                    <label htmlFor="bedroomsSelect">Number of Bedrooms</label>
                    <select id="bedroomsSelect" value={this.state.numBedrooms} onChange={this.changeNumBedrooms}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    <label htmlFor="bathroomsSelect">Bathrooms</label>
                    <select id="bathroomsSelect" value={this.state.numBathrooms} onChange={this.changeBathrooms}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </div>
            
        );
    }
}

export default OptionBar;