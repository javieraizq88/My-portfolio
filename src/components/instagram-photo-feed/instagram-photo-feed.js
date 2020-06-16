import React from "react";
import './instagram-photo-feed.css';
import { Link } from "react-router-dom";

const InstagramPhotoFeed = props => {
    return (
        <div id="instagram-photo-feed">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <i className="fab fa-instagram p-2"></i>
                <br />
                <h1 className="navbar-brand p-2">Instagram</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto"></ul>
                    <form className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <button className="btn btn-success" type="submit" data-toggle="modal" data-target="#exampleModal">Create a new
            post</button>

                            <div id="dropdown" className="btn-group dropleft">
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="fas fa-cog"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </ul>
                    </form>
                </div>
            </nav>

            <div className="col-IPF">
                <ul className="nav justify-content-center nav-pills">
                    <li className="nav-item p-2">
                        <Link className="nav-link active fas fa-list-ul" to="/projects/instagram-photo-feed"></Link> 
                    </li>
                    <li className="nav-item p-2">
                        <Link className="nav-link fas fa-square" to="/projects/instagram-photo-feed2" ></Link> 
                    </li>
                </ul>
            </div>

            <div className="conatiner">
                <div className="row">
                    <div className="col-3">
                        <img id="imagen-IPF" src="https://picsum.photos/id/34/300/200" />
                    </div>
                    <div className="col-3">
                        <img id="imagen-IPF" src="https://picsum.photos/id/3/300/200" />
                    </div>
                    <div className="col-3">
                        <img id="imagen-IPF" src="https://picsum.photos/id/304/300/200" />
                    </div>
                    <div className="col-3">
                        <img id="imagen-IPF" src="https://picsum.photos/id/354/300/200" />
                    </div>
                    <div className="col-3">
                        <img id="imagen-IPF" src="https://picsum.photos/id/90/300/200" />
                    </div>
                    <div className="col-3">
                        <img id="imagen-IPF" src="https://picsum.photos/id/46/300/200" />
                    </div>
                    <div className="col-3">
                        <img id="imagen-IPF" src="https://picsum.photos/id/496/300/200" />
                    </div>
                    <div className="col-3">
                        <img id="imagen-IPF" src="https://picsum.photos/id/6/300/200" />
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <i className="fas fa-camera"></i>
                            <i className="fas fa-map-marker-smile"></i>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success">Publish</button>
                        </div>
                    </div>
                </div>
            </div>
            <Link type="button" className="btn btn-success" to="/projects" id="back-to-jim-IPF">Back to JIM</Link>

        </div>
    )
}

export default InstagramPhotoFeed;