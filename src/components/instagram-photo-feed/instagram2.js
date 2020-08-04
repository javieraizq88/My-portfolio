import React from "react";
import './instagram-photo-feed.css';
import { Link } from "react-router-dom";

const InstagramPhotoFeed2 = props => {
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
                        <Link className="nav-link  fas fa-list-ul" to="/projects/instagram-photo-feed"></Link>
                    </li>
                    <li className="nav-item p-2">
                        <Link className="nav-link active fas fa-square" to="/projects/instagram-photo-feed2" ></Link>
                    </li>
                </ul>
            </div>


            <div id="instagram-post2">
                <div className="caja">
                    <div className="caja-header">
                        <div className="caja-header-left">
                            <div className="">
                                <div className="">
                                    HTML5<br />
                                Rigoberto
                    </div>
                            </div>
                        </div>
                        <div className="caja-header-right">
                            <i id="imagen-superior-derecha" className="far fa-address-card"></i>
                        </div>
                    </div>
                    <div className="caja-body">
                        <img src="https://picsum.photos/id/34/400/300" alt="" />
                    </div>
                    <div className="caja-icons">
                        <i id="icons-abajo-foto" className="far fa-heart fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-comment  fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-paper-plane fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-bookmark  fa-1x"></i>
                    </div>
                    <div className="caja-text">
                        <p>Liked by <strong>4GeeksAcademy, HTML5. Web</strong> and <strong>100,000 others</strong></p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, repellat. Odit maiores
                            eligendi harum recusandae, sequi sunt blanditiis similique veritatis, mollitia eius optio
                            hic. Debitis hic nam repudiandae similique minus!
            </p>
                    </div>
                </div>

                <div className="caja">
                    <div className="caja-header">
                        <div className="caja-header-left">
                            <div className="">
                                <div className="">
                                    HTML5<br />
                                Rigoberto
                    </div>
                            </div>
                        </div>
                        <div className="caja-header-right">
                            <i id="imagen-superior-derecha" className="far fa-address-card"></i>
                        </div>
                    </div>
                    <div className="caja-body">
                        <img src="https://picsum.photos/id/3/400/300" alt="" />
                    </div>
                    <div className="caja-icons">
                        <i id="icons-abajo-foto" className="far fa-heart fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-comment  fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-paper-plane fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-bookmark  fa-1x"></i>
                    </div>
                    <div className="caja-text">
                        <p>Liked by <strong>4GeeksAcademy, HTML5. Web</strong> and <strong>100,000 others</strong></p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, repellat. Odit maiores
                            eligendi harum recusandae, sequi sunt blanditiis similique veritatis, mollitia eius optio
                            hic. Debitis hic nam repudiandae similique minus!
            </p>
                    </div>
                </div>



                <div className="caja">
                    <div className="caja-header">
                        <div className="caja-header-left">
                            <div className="">
                                <div className="">
                                    HTML5<br />
                                Rigoberto
                    </div>
                            </div>
                        </div>
                        <div className="caja-header-right">
                            <i id="imagen-superior-derecha" className="far fa-address-card"></i>
                        </div>
                    </div>
                    <div className="caja-body">
                        <img src="https://picsum.photos/id/304/400/300" alt="" />
                    </div>
                    <div className="caja-icons">
                        <i id="icons-abajo-foto" className="far fa-heart fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-comment  fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-paper-plane fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-bookmark  fa-1x"></i>
                    </div>
                    <div className="caja-text">
                        <p>Liked by <strong>4GeeksAcademy, HTML5. Web</strong> and <strong>100,000 others</strong></p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, repellat. Odit maiores
                            eligendi harum recusandae, sequi sunt blanditiis similique veritatis, mollitia eius optio
                            hic. Debitis hic nam repudiandae similique minus!
            </p>
                    </div>
                </div>

                <div className="caja">
                    <div className="caja-header">
                        <div className="caja-header-left">
                            <div className="">
                                <div className="">
                                    HTML5<br />
                                Rigoberto
                    </div>
                            </div>
                        </div>
                        <div className="caja-header-right">
                            <i id="imagen-superior-derecha" className="far fa-address-card"></i>
                        </div>
                    </div>
                    <div className="caja-body">
                        <img src="https://picsum.photos/id/354/400/300" alt="" />
                    </div>
                    <div className="caja-icons">
                        <i id="icons-abajo-foto" className="far fa-heart fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-comment  fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-paper-plane fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-bookmark  fa-1x"></i>
                    </div>
                    <div className="caja-text">
                        <p>Liked by <strong>4GeeksAcademy, HTML5. Web</strong> and <strong>100,000 others</strong></p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, repellat. Odit maiores
                            eligendi harum recusandae, sequi sunt blanditiis similique veritatis, mollitia eius optio
                            hic. Debitis hic nam repudiandae similique minus!
            </p>
                    </div>
                </div>

                <div className="caja">
                    <div className="caja-header">
                        <div className="caja-header-left">
                            <div className="">
                                <div className="">
                                    HTML5<br />
                                Rigoberto
                    </div>
                            </div>
                        </div>
                        <div className="caja-header-right">
                            <i id="imagen-superior-derecha" className="far fa-address-card"></i>
                        </div>
                    </div>
                    <div className="caja-body">
                        <img src="https://picsum.photos/id/90/400/300" alt="" />
                    </div>
                    <div className="caja-icons">
                        <i id="icons-abajo-foto" className="far fa-heart fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-comment  fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-paper-plane fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-bookmark  fa-1x"></i>
                    </div>
                    <div className="caja-text">
                        <p>Liked by <strong>4GeeksAcademy, HTML5. Web</strong> and <strong>100,000 others</strong></p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, repellat. Odit maiores
                            eligendi harum recusandae, sequi sunt blanditiis similique veritatis, mollitia eius optio
                            hic. Debitis hic nam repudiandae similique minus!
            </p>
                    </div>
                </div>

                <div className="caja">
                    <div className="caja-header">
                        <div className="caja-header-left">
                            <div className="">
                                <div className="">
                                    HTML5<br />
                                Rigoberto
                    </div>
                            </div>
                        </div>
                        <div className="caja-header-right">
                            <i id="imagen-superior-derecha" className="far fa-address-card"></i>
                        </div>
                    </div>
                    <div className="caja-body">
                        <img src="https://picsum.photos/id/46/400/300" alt="" />
                    </div>
                    <div className="caja-icons">
                        <i id="icons-abajo-foto" className="far fa-heart fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-comment  fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-paper-plane fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-bookmark  fa-1x"></i>
                    </div>
                    <div className="caja-text">
                        <p>Liked by <strong>4GeeksAcademy, HTML5. Web</strong> and <strong>100,000 others</strong></p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, repellat. Odit maiores
                            eligendi harum recusandae, sequi sunt blanditiis similique veritatis, mollitia eius optio
                            hic. Debitis hic nam repudiandae similique minus!
            </p>
                    </div>
                </div>
            </div>

            <div className="caja">
                <div className="caja-header">
                    <div className="caja-header-left">
                        <div className="">
                            <div className="">
                                HTML5<br />
                                Rigoberto
                    </div>
                        </div>
                    </div>
                    <div className="caja-header-right">
                        <i id="imagen-superior-derecha" className="far fa-address-card"></i>
                    </div>
                </div>
                <div className="caja-body">
                    <div className="col-3">
                        <img src="https://picsum.photos/id/496/400/300" alt="" />
                    </div>
                    <div className="caja-icons">
                        <i id="icons-abajo-foto" className="far fa-heart fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-comment  fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-paper-plane fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-bookmark  fa-1x"></i>
                    </div>
                    <div className="caja-text">
                        <p>Liked by <strong>4GeeksAcademy, HTML5. Web</strong> and <strong>100,000 others</strong></p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, repellat. Odit maiores
                            eligendi harum recusandae, sequi sunt blanditiis similique veritatis, mollitia eius optio
                            hic. Debitis hic nam repudiandae similique minus!
            </p>
                    </div>
                </div>
            </div>

            <div className="caja">
                <div className="caja-header">
                    <div className="caja-header-left">
                        <div className="">
                            <div className="">
                                HTML5<br />
                                Rigoberto
                    </div>
                        </div>
                    </div>
                    <div className="caja-header-right">
                        <i id="imagen-superior-derecha" className="far fa-address-card"></i>
                    </div>
                </div>
                <div className="caja-body">
                    <div className="col-3">
                        <img src="https://picsum.photos/id/6/400/300" alt="" />
                    </div>
                    <div className="caja-icons">
                        <i id="icons-abajo-foto" className="far fa-heart fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-comment  fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-paper-plane fa-1x"></i>
                        <i id="icons-abajo-foto" className="far fa-bookmark  fa-1x"></i>
                    </div>
                    <div className="caja-text">
                        <p>Liked by <strong>4GeeksAcademy, HTML5. Web</strong> and <strong>100,000 others</strong></p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, repellat. Odit maiores
                            eligendi harum recusandae, sequi sunt blanditiis similique veritatis, mollitia eius optio
                            hic. Debitis hic nam repudiandae similique minus!
            </p>
                    </div>
                </div>
            </div>


            <Link type="button" className="btn btn-success mb-5" to="/" id="back-to-jim-IPF">Back to JIM</Link>

        </div>
    )
}

export default InstagramPhotoFeed2;