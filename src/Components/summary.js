import React, { Component } from 'react'
import './summary.css';
import {Table} from 'reactstrap';
 class summary extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <h4>
                                Summary
                            </h4>
                        </div>
                        <div class="col-sm-1" id="shpping-icons-sum-1">
                        <i class="fa fa-shopping-cart" ></i>
                        </div>
                        <div class="col-sm-1" id="hr-sum">
                            <hr/>
                        </div>
                        <div class="col-sm-1" id="shpping-icons-sum-2">
                        <i class="fa fa-truck" ></i>
                        </div>
                        <div class="col-sm-1" id="hr-sum">
                            <hr/>
                        </div>
                        <div class="col-sm-1" id="shpping-icons-sum-3">
                        <i class="fa fa-money"></i>
                        </div>
                    </div><br/><br/>
                    <div class="row">
                        <div class="col-sm-5">
                            <p>
                                Payment Method
                            </p>
                        </div>
                        <div class="col-sm-3">
                            <p>
                                Delivery Method
                            </p>
                        </div>

                        <div class="col-sm-3">
                            <p style={{float:"left"}}>
                                Address Delivery
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-5">
                            <button class="btn" id="cart-btn-1" >
                                <img src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Paypal-39-512.png"
                                 alt="avatar"
                                 style = {{height:'50px'}}
                                />
                            </button>
                            <button class="btn" id="cart-btn-1" >
                                <img src="https://img.pngio.com/visa-logo-visa-png-2400_2400.png"
                                 alt="avatar"
                                 style = {{height:'50px'}}
                                />
                            </button>
                            <button class="btn" id="cart-btn-3" >
                                <img src="https://www.mastercard.us/content/dam/mccom/et-ee/logos/logo-mastercard-mobile.svg"
                                 alt="avatar"
                                 style = {{height:'20px'}}
                                />
                            </button>
                        </div>
                        <div class="col-ml-3" id="delivery-method-col-sm-3">
                            <img src="https://www.dpd.com/var/dpd/storage/images/media/images/eshop/dpd_logo_redgrad_rgb/32902-1-eng-GB/dpd_logo_redgrad_rgb.png"
                                 alt="avatar"
                                 style = {{height:'30px', paddingLeft:"35px",marginTop:"20px"}}
                            />
                            <h5 style={{textAlign:"center"}}>
                                $126.56
                            </h5>
                            <p style={{textAlign:"center"}}>
                                Cash On Delivery
                            </p> 
                            <button class="btn" id="cart-btn-4">
                                CHNAGE
                            </button> 

                        </div>
                        <div class="col-sm-4">
                            <p style={{float:"left",paddingLeft:"110px"}}>
                                Khurianawalla Faisalabad<br/> 
                                132 Single Street, Khurrianwalla Faisalabad,<br/>
                                Pakistan<br/>
                                +923356569896<br/>
                                mubeenyasin75@gmail.com<br/>
                            </p>
                            <button class="btn" id="address-btn">
                                Chnagne Address
                            </button>
                        </div>

                    </div><br/><br/>
                    <div class="row"> 
                        
                    </div>
                    <div class="row">
                        <div class="col-sm-9">
                        <Table borderless>
                            <thead>
                                <tr>
                                    <th>
                                        Your Cart
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                                            alt="avatar"
                                            style = {{height:'40px',paddingLeft:"15px",paddingRight:"40px"}}
                                            
                                        />
                                        
                                            T-Shirt Summer Vibes #2343B4
                                    </td>
                                    <td>
                                        <p >
                                            White
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            XL
                                        </p>                              
                                    </td>
                                    <td>
                                        <p>
                                            $89.95
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            xl
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                                            alt="avatar"
                                            style = {{height:'40px',paddingLeft:"15px",paddingRight:"40px"}}
                                            
                                        />
                                        
                                            T-Shirt Summer Vibes #2343B4
                                    </td>
                                    <td>
                                        <p >
                                            White
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            XL
                                        </p>                              
                                    </td>
                                    <td>
                                        <p>
                                            $189.95
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            xl
                                        </p>
                                    </td>
                                </tr>
                            </thead>
                        </Table>
                        </div>
                        <div class="col-sm-3" id="total-price-cart">
                                <span className="badge m-2 badge-link" >
                                    <p>Total Price = $279.9</p>
                                </span>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-sm-6">
                            <button class="btn">
                                <img src="https://pngimage.net/wp-content/uploads/2018/05/back-arrow-icon-png-5.png"
                                            alt="avatar"
                                            style = {{height:'20px',paddingRight:"15px"}}
                                            
                                />
                                Back
                            </button>
                        </div>
                        <div class="col-sm-3">
                            <button class="btn" id="shopping-btn">
                                Continue Shopping
                            </button>
                        </div>
                        <div class="col-sm-3">
                            <button class="btn" id="proceed-payment-btn">
                                PROCEED TO PAYMENT
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}



export default summary;