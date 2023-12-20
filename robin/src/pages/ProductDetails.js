import PropTypes from "prop-types";
import React, { Component } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default class ProductDetails extends Component {
  //   static propTypes = { second: third };
  // handleAddToCart = () => {
  //   // Burada, ürün bilgilerini içeren bir nesneyi Cart sayfasına iletebilirsiniz
  //   const product = {
  //     id: 1, // Ürün ID'si
  //     name: "Atelier Ottoman Takumi Series", // Ürün adı
  //     price: 300.0, // Ürün fiyatı
  //     quantity: 1, // Ürün miktarı
  //   };

  //   // ProductDetails sayfasından Cart sayfasına yönlendirme yapılır
  //   this.props.history.push({
  //     pathname: "/cart",
  //     state: { product: product },
  //   });
  // };
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
                  <h2 className="page-title">Shop</h2>
                  <ul className="breadcrumb-list">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html">Shop</a>
                    </li>
                    <li className="active">Shop product</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="single-product-slider-details-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="product-details-slider-area product-details-slider-area--side-move">
                  <div className="product-badge-wrapper">
                    <span className="hot">Hot</span>
                  </div>
                  <div className="row g-2">
                    <div className="col-md-9 order-1 order-md-2 position-relative">
                      <div className="big-image-wrapper">
                        <div className="enlarge-icon">
                          <a
                            className="btn-zoom-popup"
                            href="javascript:void(0)"
                            data-tippy="Click to enlarge"
                            data-tippy-placement="left"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay={50}
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i className="pe-7s-expand1" />
                          </a>
                        </div>
                        <div
                          className="product-details-big-image-slider-wrapper product-details-big-image-slider-wrapper--side-space theme-slick-slider"
                          data-slick-setting='{
                                      "slidesToShow": 1,
                                      "slidesToScroll": 1,
                                      "arrows": false,
                                      "autoplay": false,
                                      "autoplaySpeed": 5000,
                                      "fade": true,
                                      "speed": 500,
                                      "prevArrow": {"buttonClass": "slick-prev", "iconClass": "fa fa-angle-left" },
                                      "nextArrow": {"buttonClass": "slick-next", "iconClass": "fa fa-angle-right" }
                                  }'
                          data-slick-responsive='[
                                      {"breakpoint":1501, "settings": {"slidesToShow": 1, "arrows": false} },
                                      {"breakpoint":1199, "settings": {"slidesToShow": 1, "arrows": false} },
                                      {"breakpoint":991, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                                      {"breakpoint":767, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                                      {"breakpoint":575, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                                      {"breakpoint":479, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} }
                                  ]'
                        >
                          <div className="single-image">
                            <img
                              src="assets/img/products/big1-1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="single-image">
                            <img
                              src="assets/img/products/big1-2.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="single-image">
                            <img
                              src="assets/img/products/big1-3.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="single-image">
                            <img
                              src="assets/img/products/big1-4.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="single-image">
                            <img
                              src="assets/img/products/big1-5.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 order-2 order-md-1 position-relative">
                      <div
                        className="product-details-small-image-slider-wrapper product-details-small-image-slider-wrapper--vertical-space theme-slick-slider"
                        data-slick-setting='{
                                  "slidesToShow": 3,
                                  "slidesToScroll": 1,
                                  "centerMode": false,
                                  "arrows": true,
                                  "vertical": true,
                                  "autoplay": false,
                                  "autoplaySpeed": 5000,
                                  "speed": 500,
                                  "asNavFor": ".product-details-big-image-slider-wrapper",
                                  "focusOnSelect": true,
                                  "prevArrow": {"buttonClass": "slick-prev", "iconClass": "fa fa-angle-up" },
                                  "nextArrow": {"buttonClass": "slick-next", "iconClass": "fa fa-angle-down" }
                              }'
                        data-slick-responsive='[
                                  {"breakpoint":1501, "settings": {"slidesToShow": 3, "arrows": true} },
                                  {"breakpoint":1199, "settings": {"slidesToShow": 3, "arrows": true} },
                                  {"breakpoint":991, "settings": {"slidesToShow": 3, "arrows": true, "slidesToScroll": 1} },
                                  {"breakpoint":767, "settings": {"slidesToShow": 3, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} },
                                  {"breakpoint":575, "settings": {"slidesToShow": 3, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} },
                                  {"breakpoint":479, "settings": {"slidesToShow": 2, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} }
                              ]'
                      >
                        <div className="single-image">
                          <img
                            src="assets/img/products/big1-1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/products/big1-2.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/products/big1-3.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/products/big1-4.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/products/big1-5.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-details-description-wrapper">
                  <h2 className="item-title">Atelier Ottoman Takumi Series</h2>
                  <p className="price">
                    <span className="main-price discounted">$360.00</span>
                    <span className="discounted-price">$300.00</span>
                  </p>
                  <p className="description">
                    Upholstered velvet ottoman with antique stud detailing.
                    Invite restrained glamour and on-trend colour into your
                    design scheme with the Eichholtz Ponti Ottoman. Inspired by
                    the neo-classical influences of Italian icon, Gio Ponti,
                    this contemporary ottoman collection is presented in a
                    choice of velvet and linen colourways.
                  </p>
                  <div className="product-color">
                    <span className="product-details-title">COLOR: </span>
                    <ul>
                      <li>
                        <a
                          className="active"
                          href="#"
                          data-tippy="Black"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="roundborder"
                        >
                          <span className="color-picker black" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-tippy="Blue"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="roundborder"
                        >
                          <span className="color-picker blue" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-tippy="Brown"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="roundborder"
                        >
                          <span className="color-picker brown" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pro-qty d-inline-block">
                    <input type="text" defaultValue={1} />
                  </div>
                  <div className="add-to-cart-btn d-inline-block">
                    <button
                      className="theme-button theme-button--alt"
                      onClick={this.handleAddToCart}
                    >
                      ADD TO CART
                    </button>
                  </div>
                  <div className="quick-view-other-info">
                    <div className="other-info-links">
                      <a href="javascript:void(0)">
                        <i className="fa fa-heart-o" /> ADD TO WISHLIST
                      </a>
                      <a href="javascript:void(0)">
                        <i className="fa fa-exchange" /> COMPARE
                      </a>
                    </div>
                    <div className="product-brand">
                      <a href="shop-left-sidebar.html">
                        <img
                          src="assets/img/brands/brand-2.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <table>
                      <tbody>
                        <tr className="single-info">
                          <td className="quickview-title">Brand: </td>
                          <td className="quickview-value">BELLE NETWORK</td>
                        </tr>
                        <tr className="single-info">
                          <td className="quickview-title">SKU: </td>
                          <td className="quickview-value">12345</td>
                        </tr>
                        <tr className="single-info">
                          <td className="quickview-title">Categories: </td>
                          <td className="quickview-value">
                            <a href="#">Decor</a>,<a href="#">Living Room</a>,
                            <a href="#">Furniture</a>
                          </td>
                        </tr>
                        <tr className="single-info">
                          <td className="quickview-title">Tags: </td>
                          <td className="quickview-value">
                            <a href="#">Decor</a>,<a href="#">Light</a>
                          </td>
                        </tr>
                        <tr className="single-info">
                          <td className="quickview-title">Share on: </td>
                          <td className="quickview-value">
                            <ul className="quickview-social-icons">
                              <li>
                                <a href="#">
                                  <i className="fa fa-facebook" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-google-plus" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-pinterest" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="single-product-description-tab-area section-space">
          <div className="description-tab-navigation">
            <ul
              className="nav nav-tabs justify-content-center"
              id="nav-tab2"
              role="tablist"
            >
              <li className="nav-item">
                <button
                  className="nav-link active"
                  id="description-tab"
                  type="button"
                  data-bs-toggle="tab"
                  data-bs-target="#product-description"
                  role="tab"
                  aria-controls="product-description"
                  aria-selected="true"
                >
                  DESCRIPTION
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="additional-info-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#product-additional-info"
                  role="tab"
                  aria-controls="product-additional-info"
                  aria-selected="false"
                >
                  ADDITIONAL INFORMATION
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#product-review"
                  role="tab"
                  aria-controls="product-review"
                  aria-selected="false"
                >
                  REVIEWS (3)
                </button>
              </li>
            </ul>
          </div>
          <div className="single-product-description-tab-content">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="product-description"
                role="tabpanel"
                aria-labelledby="description-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="description-content">
                        <p className="long-desc">
                          Inspired by the simplistic style of traditional
                          Scandinavian design, this cone shaped ceiling pendant
                          adds an understated elegance to any interior design
                          scheme. Strung on a 3m coloured cord, this simple yet
                          stylish ceiling light can be hung above your breakfast
                          bar or dining table to enhance your surroundings. A
                          modern interpretation of a classic pendant light,
                          Annular is available in a choice of muted colourways
                          and will look wonderful hung alone, or as a cluster
                          for greater visual impact.
                        </p>
                        <p>
                          <b>
                            Light source: Integrated LED (non-replaceable) with
                            30,000 hour life span.
                          </b>
                        </p>
                        <p>
                          <b>Specification: EU 220-Volts</b>
                        </p>
                        <p>
                          <b>Ceiling rose: White – included</b>
                        </p>
                        <p>
                          <b>Cable: 3 metre adjustable textile cord.</b>
                        </p>
                        <p>
                          <b>Approximate net product weight: 2.6kg</b>
                        </p>
                        <p>
                          <b>
                            This product is hardwired – professional
                            installation recommended.
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="product-additional-info"
                role="tabpanel"
                aria-labelledby="additional-info-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="additional-info-content">
                        <table className="additional-info-table">
                          <tbody>
                            <tr>
                              <th>Dimensions</th>
                              <td className="product_dimensions">
                                300 x 24 x 32 cm
                              </td>
                            </tr>
                            <tr>
                              <th>color</th>
                              <td>
                                <p>Black, Lavender Grey, Pink, White</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="product-review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="review-content-wrapper">
                        <div className="review-comments">
                          <h4 className="review-comment-title">
                            6 REVIEWS FOR OLIVIA SHAYN COVER CHAIR
                          </h4>
                          <div className="single-review-comment">
                            <div className="single-review-comment__image">
                              <img
                                src="assets/img/review/one.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="single-review-comment__content">
                              <div className="review-time">
                                <i className="fa fa-calendar" /> June 7, 2019
                              </div>
                              <div className="rating">
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                              </div>
                              <p className="review-text">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga, in.
                              </p>
                            </div>
                          </div>
                          <div className="single-review-comment">
                            <div className="single-review-comment__image">
                              <img
                                src="assets/img/review/two.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="single-review-comment__content">
                              <div className="review-time">
                                <i className="fa fa-calendar" /> June 8, 2019
                              </div>
                              <div className="rating">
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                              </div>
                              <p className="review-text">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga, in.
                              </p>
                            </div>
                          </div>
                          <div className="single-review-comment">
                            <div className="single-review-comment__image">
                              <img
                                src="assets/img/review/three.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="single-review-comment__content">
                              <div className="review-time">
                                <i className="fa fa-calendar" /> June 9, 2019
                              </div>
                              <div className="rating">
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                              </div>
                              <p className="review-text">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga, in.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="review-comment-form">
                          <h4 className="review-comment-title">Add a review</h4>
                          <p className="review-comment-subtitle">
                            Your email address will not be published. Required
                            fields are marked *
                          </p>
                          <form action="#">
                            <div className="form-group mb-3">
                              <label htmlFor="reviewerName">
                                Name <span>*</span>{" "}
                              </label>
                              <input type="text" id="reviewerName" required />
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="reviewerEmail">
                                Email <span>*</span>{" "}
                              </label>
                              <input type="email" id="reviewerEmail" required />
                            </div>
                            <div className="form-group mb-3">
                              <label
                                htmlFor="reviewRating"
                                className="d-inline-block mb-0"
                              >
                                Your rating
                              </label>
                              <div
                                className="rating d-inline-block"
                                id="reviewRating"
                              >
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="reviewComment">
                                Your review <span>*</span>
                              </label>
                              <textarea
                                name="reviewComment"
                                id="reviewComment"
                                cols={30}
                                rows={10}
                                defaultValue={""}
                              />
                            </div>
                            <button type="submit" className="theme-button">
                              SUBMIT
                            </button>
                          </form>
                        </div>
                      </div>
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
