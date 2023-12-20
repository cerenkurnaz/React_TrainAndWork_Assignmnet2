import PropTypes from "prop-types";
import React, { Component } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default class Blog extends Component {
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
                  <h2 className="page-title">Blog</h2>
                  <ul className="breadcrumb-list">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="active">Blog</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content-wrapper">
          <div className="blog-page-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 order-2">
                  <div className="blog-sidebar-wrapper">
                    <div className="single-sidebar-widget single-sidebar-widget--extra-space">
                      <h2 className="single-sidebar-widget__title single-sidebar-widget__title--extra-space">
                        Search
                      </h2>
                      <div className="sidebar-search">
                        <form action="#">
                          <input type="search" placeholder="Search..." />
                          <button type="submit">
                            <i className="fa fa-search" />
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="single-sidebar-widget">
                      <h2 className="single-sidebar-widget__title">
                        Recent Posts
                      </h2>
                      <ul className="single-sidebar-widget__dropdown single-sidebar-widget__dropdown--extra-height">
                        <li>
                          <a href="blog-left-sidebar.html">
                            The Difference Between Green Furniture and
                            Sustainable Furniture
                          </a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">
                            A Busy Person Guide To Getting Organized Room
                          </a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">
                            Three Sneaky Storage Solutions For Small Spaces
                          </a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">
                            The Future of Senior Housing
                          </a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">
                            Creating An Organized Multi-Use Room
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="single-sidebar-widget">
                      <h2 className="single-sidebar-widget__title">
                        Recent Comments
                      </h2>
                      <ul className="single-sidebar-widget__dropdown single-sidebar-widget__dropdown--comments">
                        <li>
                          <span className="commenter">Alisa</span> on{" "}
                          <a href="blog-left-sidebar.html">
                            {" "}
                            The Difference Between Green Furniture and
                            Sustainable Furniture
                          </a>
                        </li>
                        <li>
                          <span className="commenter">David</span> on{" "}
                          <a href="blog-left-sidebar.html">
                            A Busy Person Guide To Getting Organized Room
                          </a>
                        </li>
                        <li>
                          <span className="commenter">Rashed</span> on{" "}
                          <a href="blog-left-sidebar.html">
                            Three Sneaky Storage Solutions For Small Spaces
                          </a>
                        </li>
                        <li>
                          <span className="commenter">Luis</span> on{" "}
                          <a href="blog-left-sidebar.html">
                            The Future of Senior Housing
                          </a>
                        </li>
                        <li>
                          <span className="commenter">Saddam</span> on{" "}
                          <a href="blog-left-sidebar.html">
                            Creating An Organized Multi-Use Room
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="single-sidebar-widget">
                      <h2 className="single-sidebar-widget__title">Archives</h2>
                      <ul className="single-sidebar-widget__dropdown">
                        <li>
                          <a href="blog-left-sidebar.html">July 2019</a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">March 2019</a>
                        </li>
                      </ul>
                    </div>
                    <div className="single-sidebar-widget">
                      <h2 className="single-sidebar-widget__title">
                        Categories
                      </h2>
                      <ul className="single-sidebar-widget__dropdown">
                        <li>
                          <a href="blog-left-sidebar.html">Furniture</a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">Interior</a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">Uncategorized</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 order-1">
                  <div className="blog-post-wrapper">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="single-blog-post">
                          <div className="single-blog-post__image">
                            <a href="blog-post-left-sidebar.html">
                              <img
                                src="assets/img/blog/slider/one-1170x770.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="single-blog-post__content">
                            <h3 className="post-title">
                              <a href="blog-post-left-sidebar.html">
                                The Difference Between Green Furniture and
                                Sustainable Furniture
                              </a>
                            </h3>
                            <p className="post-meta">
                              By{" "}
                              <a href="#" className="post-author">
                                admin
                              </a>{" "}
                              <span className="separator">|</span>{" "}
                              <a href="#">January 21, 2019</a>
                            </p>
                            <p className="post-excerpt">
                              Many furniture companies claim their products are
                              “green,” a designation usually referring to
                              material sourcing. Maybe their sofa frames are
                              made out of dumpster-sourced scrap metal or their
                              cushions are…
                            </p>
                            <a
                              href="blog-post-left-sidebar.html"
                              className="blog-readmore-link"
                            >
                              Read more <i className="fa fa-caret-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-blog-post">
                          <div className="single-blog-post__image">
                            <div className="ratio ratio-16x9">
                              <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/0gCWPvRZcsI"
                                allowFullScreen
                              />
                            </div>
                          </div>
                          <div className="single-blog-post__content">
                            <h3 className="post-title">
                              <a href="blog-post-left-sidebar.html">
                                A Busy Person Guide To Getting Organized Room
                              </a>
                            </h3>
                            <p className="post-meta">
                              By{" "}
                              <a href="#" className="post-author">
                                admin
                              </a>{" "}
                              <span className="separator">|</span>{" "}
                              <a href="#">January 21, 2019</a>
                            </p>
                            <p className="post-excerpt">
                              Many furniture companies claim their products are
                              “green,” a designation usually referring to
                              material sourcing. Maybe their sofa frames are
                              made out of dumpster-sourced scrap metal or their
                              cushions are…
                            </p>
                            <a
                              href="blog-post-left-sidebar.html"
                              className="blog-readmore-link"
                            >
                              Read more <i className="fa fa-caret-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-blog-post">
                          <div className="single-blog-post__image single-blog-post__image--audio ratio ratio-16x9">
                            <iframe
                              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/539079543&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"
                              frameBorder={0}
                            />
                          </div>
                          <div className="single-blog-post__content">
                            <h3 className="post-title">
                              <a href="blog-post-left-sidebar.html">
                                Three Sneaky Storage Solutions For Small Spaces
                              </a>
                            </h3>
                            <p className="post-meta">
                              By{" "}
                              <a href="#" className="post-author">
                                admin
                              </a>{" "}
                              <span className="separator">|</span>{" "}
                              <a href="#">January 21, 2019</a>
                            </p>
                            <p className="post-excerpt">
                              Many furniture companies claim their products are
                              “green,” a designation usually referring to
                              material sourcing. Maybe their sofa frames are
                              made out of dumpster-sourced scrap metal or their
                              cushions are…
                            </p>
                            <a
                              href="blog-post-left-sidebar.html"
                              className="blog-readmore-link"
                            >
                              Read more <i className="fa fa-caret-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-blog-post">
                          <div className="single-blog-post__image">
                            <div
                              className="theme-slick-slider blog-image-slider"
                              data-slick-setting='{
                  "arrows": true,
                  "autoplay": true,
                  "autoplaySpeed": 5000,
                  "speed": 500,
                  "prevArrow": {"buttonClass": "slick-prev", "iconClass": "fa fa-angle-left" },
                  "nextArrow": {"buttonClass": "slick-next", "iconClass": "fa fa-angle-right" }
              }'
                            >
                              <a href="blog-post-left-sidebar.html">
                                <img
                                  src="assets/img/blog/slider/one-1170x770.jpg"
                                  alt=""
                                />
                              </a>
                              <a href="blog-post-left-sidebar.html">
                                <img
                                  src="assets/img/blog/slider/two-1170x770.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="single-blog-post__content">
                            <h3 className="post-title">
                              <a href="blog-post-left-sidebar.html">
                                The Future of Senior Housing
                              </a>
                            </h3>
                            <p className="post-meta">
                              By{" "}
                              <a href="#" className="post-author">
                                admin
                              </a>{" "}
                              <span className="separator">|</span>{" "}
                              <a href="#">January 21, 2019</a>
                            </p>
                            <p className="post-excerpt">
                              Many furniture companies claim their products are
                              “green,” a designation usually referring to
                              material sourcing. Maybe their sofa frames are
                              made out of dumpster-sourced scrap metal or their
                              cushions are…
                            </p>
                            <a
                              href="blog-post-left-sidebar.html"
                              className="blog-readmore-link"
                            >
                              Read more <i className="fa fa-caret-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-blog-post">
                          <div className="single-blog-post__image">
                            <a href="blog-post-left-sidebar.html">
                              <img
                                src="assets/img/blog/slider/five-1170x770.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="single-blog-post__content">
                            <h3 className="post-title">
                              <a href="blog-post-left-sidebar.html">
                                Creating An Organized Multi-Use Room
                              </a>
                            </h3>
                            <p className="post-meta">
                              By{" "}
                              <a href="#" className="post-author">
                                admin
                              </a>{" "}
                              <span className="separator">|</span>{" "}
                              <a href="#">January 21, 2019</a>
                            </p>
                            <p className="post-excerpt">
                              Many furniture companies claim their products are
                              “green,” a designation usually referring to
                              material sourcing. Maybe their sofa frames are
                              made out of dumpster-sourced scrap metal or their
                              cushions are…
                            </p>
                            <a
                              href="blog-post-left-sidebar.html"
                              className="blog-readmore-link"
                            >
                              Read more <i className="fa fa-caret-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-blog-post">
                          <div className="single-blog-post__image">
                            <a href="blog-post-left-sidebar.html">
                              <img
                                src="assets/img/blog/slider/six-1170x770.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="single-blog-post__content">
                            <h3 className="post-title">
                              <a href="blog-post-left-sidebar.html">
                                Sustainable Furniture in Modern World
                              </a>
                            </h3>
                            <p className="post-meta">
                              By{" "}
                              <a href="#" className="post-author">
                                admin
                              </a>{" "}
                              <span className="separator">|</span>{" "}
                              <a href="#">January 21, 2019</a>
                            </p>
                            <p className="post-excerpt">
                              Many furniture companies claim their products are
                              “green,” a designation usually referring to
                              material sourcing. Maybe their sofa frames are
                              made out of dumpster-sourced scrap metal or their
                              cushions are…
                            </p>
                            <a
                              href="blog-post-left-sidebar.html"
                              className="blog-readmore-link"
                            >
                              Read more <i className="fa fa-caret-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pagination-wrapper">
                    <ul>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
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
