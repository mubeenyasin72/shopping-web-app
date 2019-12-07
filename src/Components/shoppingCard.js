import React, { Component } from 'react';
import {ButtonGroup} from 'reactstrap';
import "./shoppingCart1.css";


class shoppingCard extends Component {
    render() {
        
        return (
            <React.Fragment>
                
                <div class="container">
                    <div class="row">
                        <div class="col-sm-9">
                            <h4 style={{padding:"15px",fontFamily:"Aharoni"}}>
                                Shopping Cart
                            </h4>
                        </div>
                        <div class="col-sm-3">
                            <h5 style={{fontFamily:"Aharoni"}}>
                                Icon Button
                            </h5>
                        </div>
                    </div>
                    <div class="row">
                        {/* <div class="col-sm-1">

                        </div> */}
                        <div class="col-sm-4">
                            <p style={{padding:"15px",fontFamily:"Anton"}}>
                                <b>Products</b>
                            </p>
                        </div>
                        <div class="col-sm-1">
                            <p>
                                Color
                            </p>
                        </div>
                        <div class="col-sm-1">
                            <p>
                                Size
                            </p> 
                        </div>
                        <div class="col-sm-1">
                            <p >
                                Counter
                            </p>
                           
                        </div>
                        <div class="col-sm-1">
                            <p>
                                Price
                            </p>
                        </div>

                    </div>
                    <br/>
                    <div class="row">
                        {/* <div class="col-sm-1">

                        </div> */}
                        <div class="col-sm-4">
                            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            style = {{height:'40px',paddingLeft:"15px",paddingRight:"40px"}}
                            
                            />
                            
                            T-Shirt Summer Vibes #2343B4


                        </div>
                        <div class="col-sm-1">
                            <p style={{fontFamily:'Anton'}}>
                                White
                            </p>
                        </div>
                        <div class="col-sm-1">
                            <p>
                                XL
                            </p>
                        </div>
                        <div class="col-sm-1">
                            <ButtonGroup >
                                <button className="btn btn-white btn-sm" style={{borderRadius:"15px"}}>
                                    -
                                </button>
                                <span className="badge m-2 badge-link">
                                    0
                                </span>
                                <button className="btn btn-White btn-sm" style={{borderRadius:"15px"}}>
                                    +
                                </button>
                            </ButtonGroup>
                        </div>
                        <div className="col-sm-1">
                            <p>
                                $89.99
                            </p>
                        </div>
                        <div class="col-sm-2">
                            <button className="btn btn-White btn-sm " style={{borderRadius:"15px"}}> 
                                X
                            </button>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        {/* <div class="col-sm-1">

                        </div> */}
                        <div class="col-sm-4">
                            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            style = {{height:'40px',paddingLeft:"15px",paddingRight:"40px"}}
                            
                            />
                            T-Shirt Summer Vibes #2343B4

                        </div>
                        <div class="col-sm-1">
                            <p>
                                White
                            </p>
                        </div>
                        <div class="col-sm-1">
                            <p>
                                XL
                            </p>
                        </div>
                        <div class="col-sm-1">
                            <ButtonGroup>
                                <button className="btn btn-white btn-sm" style={{borderRadius:"15px"}}>
                                    -
                                </button>
                                <span className="badge m-2 badge-link">
                                    0
                                </span>
                                <button className="btn btn-White btn-sm" style={{borderRadius:"15px"}}>
                                    +
                                </button>
                            </ButtonGroup>
                        </div>
                        <div className="col-sm-1">
                            <p>
                                $89.99
                            </p>
                        </div>
                        <div class="col-sm-2">
                            <button className="btn btn-White btn-sm " style={{borderRadius:"15px"}}> 
                                X
                            </button>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="row" >
                        <div class="col-sm-4" >
                            <input type="text" placeholder="Enter Promo Code"  style={{width:"80%",padding:"10px",float:"right",borderRadius:"20px" }} />
                        </div>
                        <div class="col-sm-4">
                            <p style={{textAlign:"center"}}>
                                Total Cost        $800.66
                            </p>
                        </div>
                        <div class="col-sm-2">
                            <button class="btn" id="cart-btn-1">
                                Continue shopping
                            </button>
                        </div>
                        <div class ="col-sm-1">
                        <button class="btn " id="cart-btn">
                            Add to cart
                        </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default shoppingCard;