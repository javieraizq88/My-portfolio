import React from "react";
import "./digital-postcard.css";
import { Link } from "react-router-dom";

const DigitalPostcard = props => {
    return (
        <div id="digital-postcard">
            <Link type="button" className="btn btn-success" to="/" id="back-to-jim-IP">Back to JIM</Link>
            <div className="main-content">
                <form className="postcard" action="http://formspree.lo/info@breatheco.de" >
                    <div className="postcard-header">
                        <img src="http://assets.breatheco.de/apis/img/icon/4geeks.png" />
                        <h1>My postcard</h1>
                    </div>
                    <div className="postcard-body">
                        <div className="left-part">
                            <p>Look how awesome! This is a postcard that I created using HTML5 and CSS3 doring my 4Geeks
                            Academy Course!</p>
                            <p>This is so cool, can´t wait to start doing more stuff!</p>
                        </div>
                        <div className="right-part">
                            <input type="text" name="fullname" placeholder="Full Name" />
                            <input type="text" name="Email" placeholder="Email" />
                            <input type="text" name="message" placeholder="Message" />
                        </div>
                    </div>
                    <footer>
                        <div className="postcard-footer">
                            <input type="submit" name="Send my postcard" value="Send My Postcard" />
                        </div>
                    </footer>
                </form>
            </div>
        </div>

    )

}

export default DigitalPostcard;