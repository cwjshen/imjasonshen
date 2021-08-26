import React, { Component } from 'react';
import './PhotographyPage.css';
import Navbar from 'components/Navbar/Navbar';
import HeroBanner from 'components/HeroBanner/HeroBanner';

class PhotographyPage extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <HeroBanner title="Photography" subtitle={"We don't truly understand the value of a particular moment until it becomes a memory."} imgSrc="/img/photography_page/camera_banner.jpeg"/>
      </div>
    );  
  }
  
}

export default PhotographyPage;