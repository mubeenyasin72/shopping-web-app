import React, { Component } from 'react'
import {Table,ButtonGroup} from 'reactstrap';
import './shoppingCart1.css';
 class shoppingCard1 extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <h4>
                                Shopping Card
                            </h4>
                        </div> 
                        <div class="col-sm-1" id="shpping-icons1">
                        <i class="fa fa-shopping-cart" ></i>
                        
                        </div>
                        <div class="col-sm-1" id="hr-1">
                            <hr/>
                        </div>
                        <div class="col-sm-1" id="shpping-icons2">
                        <i class="fa fa-truck" ></i>
                        </div>
                        <div class="col-sm-1" id="hr-1">
                            <hr/>
                        </div>
                        <div class="col-sm-1" id="shpping-icons3">
                        <i class="fa fa-money"></i>
                        </div>
                      
                    </div>
                    <br/>
                    <div class="row">
                        <Table borderless class="table" >
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <p>Products</p> 
                                    </th>
                                    <th scope="col"  >
                                        <p>Color</p>
                                    </th>
                                    <th scope="col">
                                        <p style={{float:"left"}}>Size</p>
                                    </th>
                                    <th scopr="col">
                                        <p>
                                            Ammount
                                        </p>
                                    </th>
                                    <th scopr="col">
                                        <p>
                                            Price
                                        </p>
                                    </th>
                                </tr>
                                <br/>
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
                                    </td>
                                    <td>
                                        <p>
                                            $89.95
                                        </p>
                                    </td>
                                    <td>
                                        <button className="btn btn-White btn-sm " style={{borderRadius:"15px"}}> 
                                            X
                                        </button>
                                    </td>
                                </tr>
                                <br/>
                                <tr>
                                    <td>
                                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                                            alt="avatar"
                                            style = {{height:'40px',paddingLeft:"15px",paddingRight:"40px"}}
                                            
                                        />
                                        
                                            Basic Fit T-Shirt #2343B4
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
                                    </td>
                                    <td>
                                        <p>
                                            $89.95
                                        </p>
                                    </td>
                                    <td>
                                        <button className="btn btn-White btn-sm " style={{borderRadius:"15px"}}> 
                                            X
                                        </button>
                                    </td>
                                </tr>
                                <br/>
                                <br/>
                                <tr>
                                    <td>
                                        <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter Promo Code" />
                                    </td>
                                    <td style={{}}>
                                        <p style={{textAlign:"center"}}>
                                            Total Cost        $800.66
                                        </p>
                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <button class="btn" id="cart-btn-1">
                                            Continue shopping
                                        </button>
                                    </td>
                                    <td>
                                        <button class="btn " id="cart-btn" > 
                                            Add to cart
                                        </button>
                                    </td>
                                </tr>
                            </thead>
                        </Table>
                    </div>
                    {/* <div class="row">
                        <div class="col-sm-12">
                        <i class="fa fa-money-check-alt" />
                        </div>
                    </div> */}
                </div>
            </React.Fragment>
        );
    }
}


export default shoppingCard1;