import React from "react";
import './instagram-post.css';


const InstagramPost = props => {
    return (
        <div id="instagram-post">
<h1 id="titulo-instagram-post">a</h1>
 <div className="caja">
        <div className="caja-header">
            <div className="caja-header-left">
                <div className="">
                    <div className="">
                        HTML5<br/>
                        Rigoberto
                    </div>
                </div>
            </div>
            <div className="caja-header-right">
                <i id="imagen-superior-derecha" className="far fa-address-card"></i>
            </div>
        </div>
        <div className="caja-body">
            <img src="https://picsum.photos/seed/picsum/400/300" alt=""/>
        </div>
        <div className="caja-icons">
            <i className="far fa-heart fa-1x"></i>
            <i className="far fa-comment  fa-1x"></i>
            <i className="far fa-paper-plane fa-1x"></i>
            <i className="far fa-bookmark  fa-1x"></i>
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
    

    )
}

export default InstagramPost;