import PropTypes from "prop-types";
import React, { Component } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default class Cart extends Component {
  // static propTypes = {second: third}

  render() {
    
    return (
      <>
        <Header />
        <br />
        <br />
        <br />
        <div className="breadcrumb-area section-space--breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="breadcrumb-wrapper">
                  <h2 className="page-title">Shopping Cart</h2>
                  <ul className="breadcrumb-list">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="active">Shopping Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content-wrapper">
          <div className="shopping-cart-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="cart-table-container">
                    <table className="cart-table">
                      <thead>
                        <tr>
                          <th className="product-name" colSpan={2}>
                            Product
                          </th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove">&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-thumbnail">
                            <a href="product-details-basic.html">
                              <img
                                src="assets/img/products/product-9-1-600x800.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="product-details-basic.html">
                              Black Colored Light
                            </a>
                            <span className="product-variation">
                              Color: Black
                            </span>
                          </td>
                          <td className="product-price">
                            <span className="price">$100.00</span>
                          </td>
                          <td className="product-quantity">
                            <div className="pro-qty d-inline-block mx-0">
                              <input type="text" defaultValue={1} />
                            </div>
                          </td>
                          <td className="total-price">
                            <span className="price">$100.00</span>
                          </td>
                          <td className="product-remove">
                            <a href="#">
                              <i className="pe-7s-close" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-thumbnail">
                            <a href="product-details-basic.html">
                              <img
                                src="assets/img/products/product-10-1-600x800.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="product-details-basic.html">Green sofa</a>
                            <span className="product-variation">
                              Color: Green
                            </span>
                          </td>
                          <td className="product-price">
                            <span className="price">$150.00</span>
                          </td>
                          <td className="product-quantity">
                            <div className="pro-qty d-inline-block mx-0">
                              <input type="text" defaultValue={1} />
                            </div>
                          </td>
                          <td className="total-price">
                            <span className="price">$250.00</span>
                          </td>
                          <td className="product-remove">
                            <a href="#">
                              <i className="pe-7s-close" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-thumbnail">
                            <a href="product-details-basic.html">
                              <img
                                src="assets/img/products/product-11-1-600x800.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="product-details-basic.html">White Sofa</a>
                            <span className="product-variation">
                              Color: White
                            </span>
                          </td>
                          <td className="product-price">
                            <span className="price">$10.00</span>
                          </td>
                          <td className="product-quantity">
                            <div className="pro-qty d-inline-block mx-0">
                              <input type="text" defaultValue={1} />
                            </div>
                          </td>
                          <td className="total-price">
                            <span className="price">$260.00</span>
                          </td>
                          <td className="product-remove">
                            <a href="#">
                              <i className="pe-7s-close" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="cart-coupon-area">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="coupon-form">
                          <form action="#">
                            <div className="row row-5">
                              <div className="col-md-7 col-sm-7">
                                <input
                                  type="text"
                                  placeholder="Enter your coupon code"
                                />
                              </div>
                              <div className="col-md-5 col-sm-5">
                                <button className="theme-button theme-button--silver">
                                  APPLY COUPON
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-lg-end">
                        <button className="theme-button">UPDATE CART</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-6">
                  <div className="cart-calculation-area">
                    <h2 className="cart-calculation-area__title">
                      Cart totals
                    </h2>
                    <table className="cart-calculation-table">
                      <tbody>
                        <tr>
                          <th>SUBTOTAL</th>
                          <td className="subtotal">$100.00</td>
                        </tr>
                        <tr>
                          <th>TOTAL</th>
                          <td className="total">$100.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="cart-calculation-button">
                      <button className="theme-button theme-button--alt theme-button--checkout">
                        PROCEED TO CHECKOUT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
