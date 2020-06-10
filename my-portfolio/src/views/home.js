import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg";

const Home = props => {
    return (
        <>

            {/* Navbar */}

<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
    <img src={logo} id="logo" alt="JIM Logo" />

      {/* <a class="navbar-brand" href="#">JIM</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> */}
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" id="navbarResponsive" href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

{/* banner */}
  <div id="banner">
                <h1>&lt; JIM &gt;</h1>
                <h3>Full Stack Development</h3>
            </div>





            {/* 


            <div id="searchbox">
                <input type="text" placeholder="Search here" />
            </div>



            <main>
                <a to="#">
                    <h2 className="section-heading">All blogs</h2>
                </a>

                <section>

                    <div className="card">
                        <div className="card-image">
                            <a to="#">
                                <img src="img/1.jpg" alt="Card Image" height="350px" />
                            </a>
                        </div>
                        <div className="card-description">
                            <a to="#">
                                <h3>The blog title here</h3>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ullam commodi eos nihil,
                                distinctio consequatur quia fugit perspiciatis qui voluptate voluptates praesentium asperiores
                                fuga autem. Optio fugiat pariatur quibusdam possimus.
                    </p>
                            <a to="#" className="btn-readmore">Read more</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <a to="#">
                                <img src="img/5.jpg" alt="Card image" height="350px" />
                            </a>
                        </div>
                        <div className="card-description">
                            <a to="#">
                                <h3>The blog title here</h3>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ullam commodi eos nihil,
                                distinctio consequatur quia fugit perspiciatis qui voluptate voluptates praesentium asperiores
                                fuga autem. Optio fugiat pariatur quibusdam possimus.
                    </p>
                            <a to="#" className="btn-readmore">Read more</a>
                        </div>
                    </div>
                </section>

                <h2 className="section-heading">All Project</h2>

                <section>
                    <div className="card">
                        <div className="card-image">
                            <a to="#">
                                <img src="img/3.jpg" alt="Card image" height="350px" />
                            </a>
                        </div>
                        <div className="card-description">
                            <a href="#">
                                <h3>The Project title here</h3>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ullam commodi eos nihil,
                                distinctio consequatur quia fugit perspiciatis qui voluptate voluptates praesentium asperiores
                                fuga autem. Optio fugiat pariatur quibusdam possimus.
                    </p>
                            <a href="#" className="btn-readmore">Read more</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <a href="#">
                                <img src="img/4.jpg" alt="Card image" height="350px" />
                            </a>
                        </div>
                        <div className="card-description">
                            <a href="#">
                                <h3>The Project title here</h3>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ullam commodi eos nihil,
                                distinctio consequatur quia fugit perspiciatis qui voluptate voluptates praesentium asperiores
                                fuga autem. Optio fugiat pariatur quibusdam possimus.
                    </p>
                            <a href="#" className="btn-readmore">Read more</a>
                        </div>
                    </div>
                </section>

                <h2 className="section-heading">Source Code</h2>

                <section id="section-source">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquid sequi dolorem sint recusandae
                        possimus quam accusantium! Aliquid, eum accusantium!
            </p>
                    <a href="#">Github Profile</a>
                </section>

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

            </main> */}
        </>
    )
}

export default Home;  