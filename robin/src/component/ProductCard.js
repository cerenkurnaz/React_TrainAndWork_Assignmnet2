import PropTypes from "prop-types";
import React, { Component } from "react";

export default class ProductCard extends Component {
  // static propTypes = { second: third };

  render() {

    return (
      <>


<div className="product-double-row-tab-area section-space">
  <div className="container wide">
    <div className="row">
      <div className="col-lg-12">
        <div className="product-double-row-tab-wrapper">
          <div className="tab-product-navigation">
            <ul className="nav nav-tabs justify-content-center" id="nav-tab2" role="tablist">
              <li className="nav-item">
                <button className="nav-link active" id="product-tab-1" type="button" data-bs-toggle="tab" data-bs-target="#product-series-1" role="tab" aria-controls="product-series-1" aria-selected="true">New Arrivals</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" id="product-tab-2" type="button" data-bs-toggle="tab" data-bs-target="#product-series-2" role="tab" aria-controls="product-series-2" aria-selected="false">Featured</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" id="product-tab-3" type="button" data-bs-toggle="tab" data-bs-target="#product-series-3" role="tab" aria-controls="product-series-3" aria-selected="false">On Sale</button>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="product-series-1" role="tabpanel" aria-labelledby="product-tab-1">
              <div className="product-row-wrapper">
                <div className="row">
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="onsale">-17%</span>
                          <span className="hot">Hot</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-9-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-9-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Lighting Lamp</a></h3>
                        <div className="price"><span className="main-price discounted">$145</span> <span className="discounted-price">$110</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="color">
                          <ul>
                            <li><a className="active" href="#" data-tippy="Black" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker black" /></a></li>
                            <li><a href="#" data-tippy="Blue" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker blue" /></a></li>
                            <li><a href="#" data-tippy="Brown" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker brown" /></a></li>
                          </ul>
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-10-1-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Jane Lauren Design Chair</a></h3>
                        <div className="price"><span className="main-price">$98</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="hot">Hot</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-11-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-11-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Jane Lauren Gregory Chair</a></h3>
                        <div className="price"><span className="main-price discounted">$125</span> <span className="discounted-price">$90</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="product-series-2" role="tabpanel" aria-labelledby="product-tab-2">
              <div className="product-row-wrapper">
                <div className="row">
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="hot">Hot</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-13-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-13-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Ovora Step stool</a></h3>
                        <div className="price"><span className="main-price discounted">$185</span> <span className="discounted-price">$140</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="color">
                          <ul>
                            <li><a className="active" href="#" data-tippy="Black" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker black" /></a></li>
                            <li><a href="#" data-tippy="Blue" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker blue" /></a></li>
                            <li><a href="#" data-tippy="Brown" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker brown" /></a></li>
                          </ul>
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="hot">Hot</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-14-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-14-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Jane Lauren Carson Chair</a></h3>
                        <div className="price"><span className="main-price">$145</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="hot">Hot</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-15-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-15-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Alexa Classic Towels</a></h3>
                        <div className="price"><span className="main-price discounted">$14</span> <span className="discounted-price">$11</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="color">
                          <ul>
                            <li><a className="active" href="#" data-tippy="Black" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker black" /></a></li>
                            <li><a href="#" data-tippy="Blue" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker blue" /></a></li>
                            <li><a href="#" data-tippy="Brown" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker brown" /></a></li>
                          </ul>
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="hot">Hot</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-16-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-16-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Olivia Shayn Cover Chair</a></h3>
                        <div className="price"><span className="main-price">$98</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="hot">Hot</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-9-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-9-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Lighting Lamp</a></h3>
                        <div className="price"><span className="main-price discounted">$145</span> <span className="discounted-price">$110</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="color">
                          <ul>
                            <li><a className="active" href="#" data-tippy="Black" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker black" /></a></li>
                            <li><a href="#" data-tippy="Blue" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker blue" /></a></li>
                            <li><a href="#" data-tippy="Brown" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker brown" /></a></li>
                          </ul>
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="hot">Hot</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-10-1-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Jane Lauren Design Chair</a></h3>
                        <div className="price"><span className="main-price">$98</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="hot">Hot</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-11-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-11-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Jane Lauren Gregory Chair</a></h3>
                        <div className="price"><span className="main-price discounted">$125</span> <span className="discounted-price">$90</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="hot">Hot</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-12-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-12-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Candice Desk Lamp</a></h3>
                        <div className="price"><span className="main-price">$100</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="product-series-3" role="tabpanel" aria-labelledby="product-tab-3">
              <div className="product-row-wrapper">
                <div className="row">
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="onsale">-15%</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-16-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-16-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Olivia Shayn Cover Chair</a></h3>
                        <div className="price"><span className="main-price">$98</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="onsale">-20%</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-9-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-9-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Lighting Lamp</a></h3>
                        <div className="price"><span className="main-price discounted">$145</span> <span className="discounted-price">$110</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="color">
                          <ul>
                            <li><a className="active" href="#" data-tippy="Black" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker black" /></a></li>
                            <li><a href="#" data-tippy="Blue" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker blue" /></a></li>
                            <li><a href="#" data-tippy="Brown" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker brown" /></a></li>
                          </ul>
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="onsale">-30%</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-10-1-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Jane Lauren Design Chair</a></h3>
                        <div className="price"><span className="main-price">$98</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="onsale">-10%</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-13-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-13-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Ovora Step stool</a></h3>
                        <div className="price"><span className="main-price discounted">$185</span> <span className="discounted-price">$140</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="color">
                          <ul>
                            <li><a className="active" href="#" data-tippy="Black" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker black" /></a></li>
                            <li><a href="#" data-tippy="Blue" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker blue" /></a></li>
                            <li><a href="#" data-tippy="Brown" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker brown" /></a></li>
                          </ul>
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="onsale">-20%</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-14-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-14-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Jane Lauren Carson Chair</a></h3>
                        <div className="price"><span className="main-price">$145</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="onsale">-20%</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-15-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-15-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Alexa Classic Towels</a></h3>
                        <div className="price"><span className="main-price discounted">$14</span> <span className="discounted-price">$11</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="color">
                          <ul>
                            <li><a className="active" href="#" data-tippy="Black" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker black" /></a></li>
                            <li><a href="#" data-tippy="Blue" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker blue" /></a></li>
                            <li><a href="#" data-tippy="Brown" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker brown" /></a></li>
                          </ul>
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="onsale">-5%</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-11-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-11-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Jane Lauren Gregory Chair</a></h3>
                        <div className="price"><span className="main-price discounted">$125</span> <span className="discounted-price">$90</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                          <span className="onsale">-10%</span>
                        </div>
                        <a href="product-details-basic.html" className="image-wrap">
                          <img src="assets/img/products/product-12-1-270x360.jpg" className="img-fluid" alt="" />
                          <img src="assets/img/products/product-12-2-270x360.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                          <span className="single-icon single-icon--add-to-cart"><a href="#" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO CART</span></a></span>
                          <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title"><a href="product-details-basic.html">Candice Desk Lamp</a></h3>
                        <div className="price"><span className="main-price">$100</span></div>
                        <div className="rating">
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star active" />
                          <i className="fa fa-star" />
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                          <i className="fa fa-heart-o" />
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 text-center">
        <a href="javascript:void(0)" className="theme-button theme-button--loadmore section-space--small-top">LOAD MORE</a>
      </div>
    </div>
  </div>
</div>

      </>
    );
  }
}

