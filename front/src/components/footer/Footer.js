import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./Footer.scss"

export default () => {
    return (
        <div id="footer" className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-7 col-sm-7 col-md-8 col-lg-8 col-xl-8">
                        <h5>SuperHero App®</h5>
                        <h6>BautiGonzalez</h6>
                    </div>
                    <div className="col-5 col-sm-5 col-md-4 col-lg-4 col-xl-4">
                        <div className="icons">
                            <a target="_blank" href="https://github.com/bautigonzalez"><span><GitHubIcon/></span></a>
                            <a target="_blank" href="https://www.instagram.com/bautigonzalez2/"><span><InstagramIcon/></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };