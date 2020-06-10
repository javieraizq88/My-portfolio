import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg";
import Navbar from '../components/navbarHome';

const Home = props => {
    return (
        <>
            <Navbar />

            {/* banner */}
            <div id="banner">
                <h1>&lt; JIM &gt;</h1>
                <h3>Full Stack Development</h3>
            </div>


            {/* Page Content */}
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-6 col-xs-6 mr-2 mt-5 mb-5">
                    <h1>What We Do</h1>
                    <hr />
                    <p className=" text-justify" id="p-Home">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                    <p className=" text-justify" id="p-Home">>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
                    <a className="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
                </div>
                <div className="col-md-4 col-xs-4 ml-5 mt-5 mb-5">
                    <h1 >Contact</h1>
                    <hr />
                    <address>
                        <p className="ml-3" id="p-Home"><strong>Javiera Izquierdo Martino</strong></p>
                        <p className="ml-3" title="Phone" id="p-Home">Phone: (+56) 99 345 8208</p>
                        <p className="ml-3" title="Email" id="p-Home">Email:<a href="mailto:javieraizquierdo7@gmail.com">  javieraizquierdo7@gmail.com</a></p>
                        <br />
                    </address>
                </div>
            </div>
            {/* /.row */}

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 col-xs-10 mr-2 mt-5 mb-5">
                    <h1>Projects</h1>
                    <hr />
                    <div className="card-group">
                    <div class="col-md-4 mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
                            <div class="card-body">
                                <h4 class="card-title">Project 1</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
                            <div class="card-body">
                                <h4 class="card-title">Project 2</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
                            <div class="card-body">
                                <h4 class="card-title">Project 3</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
                            <div class="card-body">
                                <h4 class="card-title">Project 4</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
                            <div class="card-body">
                                <h4 class="card-title">Project 5</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
                            <div class="card-body">
                                <h4 class="card-title">Project 6</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>



            <main>






                <footer>
                    <div id="left-footer">
                        <h3>Quick Links</h3>
                        <p>
                            <ul>
                                <li>
                                    <a className="active" to="#">Home</a>
                                </li>
                                <li>
                                    <a to="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a to="#">Blogs</a>
                                </li>
                                <li>
                                    <a to="#">Projects</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </p>
                    </div>

                    <div id="right-footer">
                        <h3>Follow us on</h3>
                        <div id="social-media-footer">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p>This website is developed by JIM</p>
                    </div>
                </footer>

            </main>


            {/* 


            <div id="searchbox">
                <input type="text" placeholder="Search here" />
            </div>


*/}

        </>
    )
}

export default Home;  