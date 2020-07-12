import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
    return (
        <>
                <footer>
                    <div className="row">
                        <div className="col-md-6 col-xs-6" id="left-footer">
                            <h3>Quick Links</h3>
                            <p>
                                <ul>
                                    <li>
                                        <Link className="active" to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/cv">CV</Link>
                                    </li>
                                    <li>
                                        <Link to="/services">Servicios</Link>
                                    </li>
                                    <li>
                                        <Link to="/projects">Projectos</Link>
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="col-md-6 col-xs-6" id="right-footer">
                            <h3>Follow me on</h3>
                            <div id="social-media-footer">
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/javiera-izquierdo-b9173697/">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/javieraizq88">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <p>This website is developed by JIM</p>
                        </div>
                    </div>
                </footer>

        </>
    )
}

export default Footer;  