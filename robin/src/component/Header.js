import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Header extends Component {
  // static propTypes = {second: third}

  render() {
    return (
      <>
        <div className="header-area header-area--default header-area--default--transparent header-sticky">
  <div className="header-navigation-area header-navigation-area--extra-space d-none d-lg-block">
    <div className="container wide">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-info-wrapper header-info-wrapper--alt-style">
            <div className="header-logo">
              <a href="index.html">
                <img src="assets/img/logo.png" className="img-fluid" alt="" />
                <img src="assets/img/logo-alt.png" className="img-fluid" alt="" />
              </a>
            </div>
            <div className="header-navigation-wrapper">
              <nav>
                <ul>
                  <li className="has">
                    <a href="/">HOME</a>
                  </li>
                  <li className="has">
                    <a href="ProductDetails">PRODUCT DETAILS</a>
                  </li>
                  <li className="has">
                    <a href="About">ABOUT</a>
                  </li>
                  <li className="has">
                    <a href="Blog">BLOG</a>
                  </li>
                  <li className="has">
                    <a href="BlogDetails">BLOG DETAILS</a>
                  </li>
                  <li className="has">
                    <a href="Contact">CONTACT</a>
                  </li>
                  <li className="has">
                    <a href="Cart">CART</a>
                  </li>
                  <li className="has">
                    <a href="Checkout">CHECKOUT</a>
                  </li>
                  <li className="has">
                    <a href="OrderTracking">ORDER TRACKING</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </>
    )
  }
}
