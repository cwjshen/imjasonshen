import React, { Component } from 'react';
import './HeroBanner.css';

class HeroBanner extends Component {

  render() {

    let img_src = this.props.imgSrc;
    let bannerImage = {
      /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + img_src + ")"

    };

    return (
      <div>
        <section className="banner-container" style={bannerImage}>
          <div className="banner-text">
            <h1> {this.props.title} </h1>
            <p> {this.props.subtitle} </p>
          </div>
        </section> 
      </div>
    );  
  }
  
}

export default HeroBanner;