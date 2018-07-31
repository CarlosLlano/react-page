import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1>Carlos Llano</h1>
                            <hr />
                            <p>Software Engineer and Industrial Engineer</p>
                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/carlosllanolozano/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://github.com/CarlosLlano" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* AngelList */}
                                <a href="https://angel.co/carlosllano" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-angellist" aria-hidden="true" />
                                </a>
                                {/* Youtube */}
                                <a href="https://www.youtube.com/channel/UCiIW-AlJsD_PL-rePV75f-g" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;

