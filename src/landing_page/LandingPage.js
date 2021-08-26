import React, { Component } from 'react';
import './LandingPage.css';
import Navbar from 'components/Navbar/Navbar';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import TldrPair from 'landing_page/components/TldrPair';

class LandingPage extends Component {
  render() {
    return (
      <div className="snap-container">
        <Navbar/>
        <HeroBanner title="I'm Jason Shen" subtitle='Part of being an adult is rediscovering your inner child' imgSrc="/img/landing_page/header_banner.JPEG"/>
        <section className="body-section">
          <div className="container-fluid row">
            <div className="col-md-4 my-5 py-5">
              <h1 className="body-title">Rediscovery</h1>
              <div className="underline my-5"/>
              <div className="container-fluid summary-container">
                  Strive to experience again the same joy, wonder and excitement I found in life as a child, unhindered by the countless stressors that chase me as an adult.
                  {/*Think back to a time when you were just a kid, specifically a time when something REALLY excited. Maybe it was the first time you learned how to ride a bike, or the time you booted up that new video game you just got for your birthday, or reading your favorite fantasy novel and not being able to put it down.
                  Now compare that to the a similar feeling you might get as an adult when you're perfecting your favorite cooking recipe, unboxing that new smartphone, or making it to the top of a mountain hike.
                  I'd argue that for most people, these two feelings don't really feel the same, at least not for me it doesn't. For me, those experiences as a kid were filled with so much more of a feeling that I can only best describe as "fascination and wonder". I think this feeling was lost somewhere along the way while chasing results and striving for success.       */}
              </div>
            </div>
            <div className="col-md-4 my-5 py-5">
              <h1 className="body-title">Mastery</h1>
              <div className="underline my-5"/>
              <div className="container-fluid summary-container">
                Pursue excellence and constantly test my limits. Understand what I'm capable of and what I struggle with but always deliver maximum execution.
              </div>
            </div>
            <div className="col-md-4 my-5 py-5">
              <h1 className="body-title">Growth</h1>
              <div className="underline my-5"/>                
              <div className="container-fluid summary-container">
                Take myself to new heights, stay open-minded and be on a constant lookout for new opportunities that come my way. There is always room to be a better version of myself.
              </div>
            </div>                        
          </div>
        </section>        
        <section className="landing-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 px-0 my-auto">
                <img src="/img/profile.jpg" alt="profile" className="img-fluid"/>
              </div>
              <div className="col-md-6 px-0 my-auto py-5">
                <h1 className="intro-title">TL;DR.</h1>  
                <div className="underline my-5"/>
                <div className="container-fluid summary-container">
                  <TldrPair imgSrc="/img/favicons/profile_silhouette/profile_silhouette_light_gray.png" desc="Jason Shen / Chung Wei / 沈中伟 "/>
                  <TldrPair imgSrc="/img/favicons/briefcase/briefcase_light_gray.png" desc="Software Engineer @ J.P. Morgan Chase"/>
                  <TldrPair imgSrc="/img/favicons/location_pin/location_pin_gray.png" desc="New York"/>
                </div>
                <div className="container-fluid my-5">
                  <a href="https://www.facebook.com/imjasonshen" target="_blank" rel="noopener noreferrer">
                    <img className="px-1 py-2" src="/img/favicons/socials/fb.png" alt="facebook"/>
                  </a>
                  <a href="https://www.instagram.com/imjasonshen" target="_blank" rel="noopener noreferrer">
                    <img className="px-1 py-2" src="/img/favicons/socials/ig2.png" alt="instagram"/>
                  </a>
                  <a href="https://www.linkedin.com/in/imjasonshen" target="_blank" rel="noopener noreferrer">
                    <img className="px-1 py-2" src="/img/favicons/socials/linkedin.png" alt="linkedin"/>
                  </a>
                  <a href="https://www.github.com/cwjshen" target="_blank" rel="noopener noreferrer">
                    <img className="px-1 py-2" src="/img/favicons/socials/github_purple.png" alt="github"/>
                  </a>
                  <a href="https://open.spotify.com/user/12184029627" target="_blank" rel="noopener noreferrer">
                    <img className="px-1 py-2" src="/img/favicons/socials/spotify.png" alt="spotify"/>
                  </a>
                </div>
              </div>
            </div>
          </div> 
        </section>
      </div>
    );  
  }
  
}

export default LandingPage;