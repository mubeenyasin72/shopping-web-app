import React, { Component } from 'react';
import Address from '../Components/addressCard';
import Shopping from '../Components/shoppingCard1';
import Summary from '../Components/summary';
import {Link} from 'react-mdl';
class routing_shopping_app extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <span class="navbar-brand">E-Shop</span>

                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav" >
                                <a class="nav-item nav-link active">Men</a>
                                <a class="nav-item nav-link" >Women</a>
                                <a class="nav-item nav-link">Kids</a>
                                
                                </div>
                            </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default routing_shopping_app;
