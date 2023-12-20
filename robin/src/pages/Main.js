import PropTypes from "prop-types";
import React, { Component } from 'react'
import Header from '../component/Header'
import ProductCard from '../component/ProductCard'
import Slider from '../component/Slider'
import Footer from '../component/Footer'

export default class Main extends Component {
  render() {
    const productData = {
      image: 'path/to/image.jpg',
      // diğer özellikleri ekleyin
    };
    return (
      <>
        <Header/>
        <br />
        <br />
        <br />
        <Slider/>
        <ProductCard product={productData}/>
        <Footer/>
      </>
    )
  }
}
