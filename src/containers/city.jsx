import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class City extends Component {

    handleClick = () => {
        this.props.setActiveCity(this.props.city);
        console.log("click", this.props.city.name);
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { setActiveCity: setActiveCity},
        dispatch
    )
}

// function mapReduxStateToProps(reduxState) {
//     return {
//         setActiveCity: reduxState.setActiveCity
//     }
// }


export default connect(null, mapDispatchToProps)(City);
