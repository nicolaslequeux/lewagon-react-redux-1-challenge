import React, { Component } from 'react';

class City extends Component {

    handleClick = () => {
        // this.props.setActiveCity(this.props.city);
    }


    render() {
        return (
            <div className="city" onClick={this.handleClick}>
                <h3>{this.props.city.name}</h3>
            </div>
        )
    }

}

import { setActiveCity } from '../actions/index';

export default City;