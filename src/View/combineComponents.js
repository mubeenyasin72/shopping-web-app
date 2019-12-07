import React, { Component } from 'react';
// import {Switch, Route, Router} from 'react-router-dom';
import Address from '../Components/addressCard';
import Shopping from '../Components/shoppingCard1';
import Summary from '../Components/summary';
 class combineComponents extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container">
                    {/* <Shopping/> */}
                    {/* <Address/> */}
                    <Summary/>
                </div>
            </React.Fragment>
        )
    }
}

export default combineComponents;