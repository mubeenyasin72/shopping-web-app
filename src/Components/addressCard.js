import React, { Component } from 'react'
// import {Table, FormGroup,Label, Input} from 'reactstrap';
import './addressCard.css';
//import Umar from './umar.jpg';

class addressCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <h5>Address Data and Type Of Delivery</h5>
                        </div>
                        <div class="col-sm-1" id="shpping-icons-1">
                        <i class="fa fa-shopping-cart" ></i>
                        </div>
                        <div class="col-sm-1" id="hr-add">
                            <hr/>
                        </div>
                        <div class="col-sm-1" id="shpping-icons-2">
                        <i class="fa fa-truck" ></i>
                        </div>
                        <div class="col-sm-1" id="hr-add">
                            <hr/>
                        </div>
                        <div class="col-sm-1" id="shpping-icons-3">
                        <i class="fa fa-money"></i>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-sm-4">
                            <form>
                                <div class="form-group">
                                    <label>
                                        Enter your First Name
                                    </label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your First Name" />
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-4">
                            <form>
                                <div class="form-group">
                                    <label>
                                        Enter your Last Name
                                    </label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your Last Name" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                    <div class="col-sm-4">
                            <form>
                                <div class="form-group">
                                    <label>
                                        Enter your Address
                                    </label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your Address" />
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-4">
                            <form>
                                <div class="form-group">
                                    <label>
                                        Enter your City
                                    </label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your City" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                    <div class="col-sm-4">
                            <form>
                                <div class="form-group">
                                    <label>
                                        Postel Code / Zip
                                    </label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Postel Code / Zip" />
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-4">
                            <form>
                                <div class="form-group">
                                    <label>
                                        Phone Number
                                    </label>
                                    <input type="number" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your Phone Number" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Country</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option
                                img src="https://cdn.countryflags.com/thumbs/pakistan/flag-3d-250.png"  
                                alt="avatar"
                                style = {{height:'10px',paddingRight:"15px"}}
                                >
                                    Pakistan
                                </option>
                                <option>UAE</option>
                                <option>USA</option>
                                <option>Chiana</option>
                                <option>India</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <form>
                                <div class="form-group">
                                    <label>
                                        E-Mail
                                    </label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your email@.com" />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/><br/>
                    <div class="row">
                        <div class="col-sm-2">
                            <button class="btn" id="cart-btn-2">
                                <img src="https://pngimage.net/wp-content/uploads/2018/05/back-arrow-icon-png-5.png"
                                            alt="avatar"
                                            style = {{height:'20px',paddingRight:"15px"}}
                                            
                                />
                                Bcak
                            </button>
                        </div><br/>
                        <div class="col-sm-6">

                        </div><br/><br/>
                        <div class="col-sm-2">
                            <button class="btn" id="cart-btn-1">
                                Continue shopping
                            </button>
                        </div><br/><br/><br/>
                        <div class="col-sm-2">
                            <button class="btn" id="cart-btn-8">
                                Next Step
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}



export default addressCard;