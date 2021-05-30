import React from 'react';
import header from '../../Image/Header.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{height:'600px',marginTop:'60px', marginBottom:'60px', overflow:'hidden'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Let's Chat or  <br/>Make Video Call  </h1>
                <p >We are providing Chat,Video Call and Video Conference service.If your are interested to chat or video call with your special one. Click Below.</p>
                <a class="link-button btn-primary" target="_blank" href="" rel="noreferrer">Chat Now</a>
                    
            </div>
            <div className="col-md-6">
                <img style={{height:'600px'}} src={header} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;