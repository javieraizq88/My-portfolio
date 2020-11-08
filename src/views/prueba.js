import React from "react";

const Prueba = props => {
  return (
    <div className="mt-5 pt-2 container">

      <div class="card-columns">

        <div class=" card autoservicio mb-4">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">1) autoservicio</h5>
            <p class="card-text">This is a longtural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">This is a longtural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>

        <div class="card p-3 movilidad-interna mb-4">
          <blockquote class="blockquote mb-0 card-body">
            <h5 class="card-title">2) movilidad interna</h5>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>

        <div class="card agradecimientos mb-4">
          <img src="#" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">3) agradecimientos</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

        <div class="card tus-contactos p-3 mb-4">
          <blockquote class="blockquote mb-0">
            <p> caja 4 tus contactos</p>
            <p> caja 4 tus contactos</p>
            <footer class="blockquote-footer text-white">
              <small>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>

        <div class="card beneficios p-3 mb-4">
          <blockquote class="blockquote mb-0">
            <p> caja 5 beneficios</p>
            <footer class="blockquote-footer text-white">
              <small>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>

        <div class="card comunidades mb-4">
          <div class="card-body">
            <h5 class="card-title">Caja 6 comunicades</h5>
            <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

        <div class="card banco-puntos mb-4">
          <h4>caja 7 banco de puntos</h4>
          <img src="..." class="card-img-top" alt="..." />
        </div>

        <div class="card p-3 aprendizaje mb-4">
          <blockquote class="blockquote mb-0">
            <p>caja 8 aprendizaje</p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div class="card mis-desafios mb-4">
          <div class="card-body">
            <h5 class="card-title">Caja 9 mis desafios</h5>
            <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>



{/* VACACIONES */}

      <div class="col-sm-4 col-12">
        <div class="card bch-card mb-4">
          <div class="card-body ">
            <div class="panel-de-gestion-widget__titulo">
              <h5 class="c-gray-dark">Vacaciones disponibles</h5>
              <i class="icon-icon-bch-outcomes flecha__azul"></i>
            </div>
            <div class="vacaciones-contenedor">
              <h5 >35</h5>
              <p c>Total de días disponibles</p>
            </div>
            {/* <!-- leyenda del grafico --> */}
            <div class="vacaciones-leyenda">

              <div class="d-flex jc-sb">
                <div class="d-flex">
                  <div class="primero"></div>
                  <p class="c-gray text--small my-2">Disponobles de este año</p>
                </div>
                <p class="c-gray-dark fw-b text--smaller my-2">10</p>
              </div>
              <hr class="ma-0" />
              <div class="d-flex jc-sb">
                <div class="d-flex">
                  <div class="segundo"></div>
                  <p class="c-gray text--small my-2">Disponobles de años anteriores</p>
                </div>
                <p class="c-gray-dark fw-b text--smaller my-2">10</p>
              </div>
              <hr class="ma-0" />
              <div class="d-flex jc-sb">
                <div class="d-flex">
                  <div class="tercero"></div>
                  <p class="c-gray text--small my-2">Días progresivos</p>
                  <i class="icon-icon-bch-question-circle-fill d-flex ai-c ml-3 c-gray"></i>
                </div>
                <p class="c-gray-dark fw-b text--smaller my-2">10</p>
              </div>
              <hr class="ma-0" />
            </div>
          </div>
        </div>
      </div>



{/* evaluacion y retro agil */}

<div class="col-sm-4 col-12">
    <div class="card bch-card mb-4">
        <div class="card-body ">
            <div class="panel-de-gestion-widget__titulo">
                <h5 class="c-gray-dark">Evaluación y Retro Ágil</h5>
                <i class="icon-icon-bch-outcomes flecha__azul"></i>
            </div>
            {/* <!-- evaluacion agil --> */}
            <h4 class="c-brand fw-b mt-7">Evaluación Ágil</h4>
            <div class="row">
                {/* <!-- lado izquierdo --> */}
                <div class="col-5 col-md-5 pt-4">
                    <div class="d-flex">
                        <i class="bch-pyo-icon-resultado size-icon-md c-brand"></i>
                        <h2 class="pl-3 mb-0">4.7</h2>
                    </div>
                    <p class="c-gray-dark text--smaller">Cumple destacado</p>
                </div>
                {/* <!-- lado derecho --> */}
                <div class="col-7 col-md-7">
                    <div class="d-flex mb-2">
                        <div class="pr-2 fw-b text--small">5.0</div> 
                        <div class="c-gray text--small">Soy Protegonista</div>
                    </div>
                    <div class="d-flex ">
                        <div class="pr-2 fw-b text--small">2.2</div> 
                        <div class="c-gray text--small">Yo Contribuyo</div>
                    </div>
                    <p class="c-gray-dark text--smaller mt-1">+ 4 ADN</p>
                </div>
            </div>
            <hr/>
            <h4 class="c-brand fw-b mt-5">Retro Ágil</h4>
            <div class="row pt-3">
                {/* <!-- lado izquierdo --> */}
                <div class="col-6 col-md-6">
                    <div class="d-flex">
                        <i class="bch-pyo-icon-retro-positiva size-icon-md c-brand"></i>
                        <h2 class="pl-1 mb-0 fw-b">100</h2>
                    </div>
                    <p class="c-gray-dark text--smaller">Retro Ágil Positiva</p>
                </div>
                {/* <!-- lado derecho --> */}
                <div class="col-6 col-md-6">
                    <div class="d-flex">
                        <i class="bch-pyo-icon-oportunidad-de-mejora size-icon-md c-brand"></i>
                        <h2 class="pl-1 mb-0 fw-b">15</h2>
                    </div>
                    <p class="c-gray-dark text--smaller">Oportunidades de mejora</p>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>





  )
}

export default Prueba;