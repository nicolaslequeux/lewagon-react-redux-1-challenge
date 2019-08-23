import React, { Component } from 'react';

import { connect } from 'react-redux';


class Map extends Component {
    render() {


        return (
            <div className="col-md-8">
                <h2>{this.props.setActiveCity} </h2>
            </div>
        )
    }

}

function mapReduxStateToProps(reduxState) {
    return {
        setActiveCity: reduxState.setActiveCity
    }
}


export default connect(mapReduxStateToProps)(Map);