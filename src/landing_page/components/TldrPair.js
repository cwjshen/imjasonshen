import React, { Component } from 'react';
import './TldrPair.css';

class TldrPair extends Component {
  render() {
    return (
      <div>
        <div className="row py-4 no-gutters">
          <div className="col-md-3">                    
            <img src={this.props.imgSrc} alt="icon"/>
          </div>
          <div className="col-md-9 tldr-text">
            {this.props.desc}
          </div>                  
        </div>
      </div>
    );  
  }
  
}

export default TldrPair;