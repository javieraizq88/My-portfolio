import React from "react"
import Navbar from "./navbar";

const EstilosCSS = props => {

    function cargaContextoCanvas(idCanvas) {
        var elemento = document.getElementById(idCanvas);
        if (elemento && elemento.getContext) {
            var contexto = elemento.getContext('2d');
            if (contexto) {
                return contexto;
            }
        }

        return false;
    }


    window.onload = function () {


        // superposicion imagenes
        var contexto = cargaContextoCanvas('myCanvas3');
        if (contexto) {
            //Si tengo el contexto 
            //cambio el color de dibujo a azul
            contexto.fillStyle = '#6666ff';
            //dibujo un rectángulo azul
            contexto.fillRect(10, 10, 50, 50);
            //cambio el color a amarillo con un poco de transparencia
            contexto.fillStyle = 'rgba(255,255,0,0.7)';
            //pinto un rectángulo amarillo semitransparente
            contexto.fillRect(35, 35, 50, 50);
        }

        // diamante
        var ctx = cargaContextoCanvas('myCanvas4');
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(50, 5);
            ctx.lineTo(75, 65);
            ctx.lineTo(50, 125);
            ctx.lineTo(25, 65);
            ctx.fill();
        }

        // escalera 1
        var ctx = cargaContextoCanvas('myCanvas5');
        if (ctx) {
            let i = 0;
            ctx.beginPath();
            ctx.moveTo(1, 1);
            for (i = 1; i < 100; i += 5) {
                if ((i % 2) != 0) {
                    ctx.lineTo(i + 5, i);
                } else {
                    ctx.lineTo(i, i + 5);
                }
            }
            ctx.lineTo(1, i);
            ctx.closePath();
            ctx.stroke();
        }

        // escalera 2
        var ctx = cargaContextoCanvas('myCanvas6');
        if (ctx) {
            let i = 0;
            ctx.beginPath();
            ctx.moveTo(1, 1);
            for (i = 1; i < 100; i += 5) {
                if ((i % 2) != 0) {
                    ctx.lineTo(i + 5, i);
                } else {
                    ctx.moveTo(i, i + 5);
                }
            }
            ctx.stroke();
        }

        // Hexagono relleno de color, cierre de camino automático con fill
        var ctx = cargaContextoCanvas('myCanvas7');
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(50, 15);
            ctx.lineTo(112, 15);
            ctx.lineTo(143, 69);
            ctx.lineTo(112, 123);
            ctx.lineTo(50, 123);
            ctx.lineTo(19, 69);
            ctx.fill();
        }

        //Hexagono rellenado, cierre de camino explícito con closePath
        var ctx = cargaContextoCanvas('myCanvas8');
        if (ctx) {
            ctx.fillStyle = '#929830';
            ctx.beginPath();
            ctx.moveTo(50, 15);
            ctx.lineTo(112, 15);
            ctx.lineTo(143, 69);
            ctx.lineTo(112, 123);
            ctx.lineTo(50, 123);
            ctx.lineTo(19, 69);
            ctx.closePath();
            ctx.fill();
        }

        // Hexagono rellenado, cierre de camino explícito con closePath
        var ctx = cargaContextoCanvas('myCanvas9');
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(50, 15);
            ctx.lineTo(112, 15);
            ctx.lineTo(143, 69);
            ctx.lineTo(112, 123);
            ctx.lineTo(50, 123);
            ctx.lineTo(19, 69);
            ctx.stroke();
        }

        // Hexagono sólo línea, con cierre de camino closePath()
        var ctx = cargaContextoCanvas('myCanvas10');
        if (ctx) {
            ctx.strokeStyle = '#990000';
            ctx.beginPath();
            ctx.moveTo(50, 15);
            ctx.lineTo(112, 15);
            ctx.lineTo(143, 69);
            ctx.lineTo(112, 123);
            ctx.lineTo(50, 123);
            ctx.lineTo(19, 69);
            ctx.stroke();
        }

        // pintar dos caminos distintos
        var ctx = cargaContextoCanvas('myCanvas11');
        if (ctx) {
            //primer camino
            ctx.beginPath();
            ctx.moveTo(20, 10);
            ctx.lineTo(32, 20);
            ctx.lineTo(22, 20);
            ctx.lineTo(22, 35);
            ctx.lineTo(17, 35);
            ctx.lineTo(17, 20);
            ctx.lineTo(7, 20);
            //ctx.closePath(); opcional antes de un fill()
            ctx.fill();

            //creo un segundo camino
            ctx.beginPath(); //probar a comentar esta línea para ver lo que pasa
            ctx.fillStyle = '#ff8800';
            ctx.moveTo(47, 50);
            ctx.lineTo(67, 70);
            ctx.lineTo(67, 30);
            ctx.closePath();
            ctx.fill();
        }

        // pintar dos caminos distintos
        var ctx = cargaContextoCanvas('myCanvas12');
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(20, 7);
            ctx.lineTo(32, 20);
            ctx.lineTo(22, 20);
            ctx.lineTo(22, 35);
            ctx.lineTo(17, 35);
            ctx.lineTo(17, 20);
            ctx.lineTo(7, 20);
            ctx.closePath();

            //cambio el color de la línea, el color cambia para todo el trazo
            ctx.strokeStyle = '#ff8800';

            //sigo en el mismo camino, pero muevo el puntero de dibujo
            ctx.moveTo(47, 50);
            ctx.lineTo(67, 70);
            ctx.lineTo(67, 30);
            ctx.closePath();
            ctx.stroke();
        }

        // curvas con arcos
        var ctx = cargaContextoCanvas('myCanvas13');
        if (ctx) {
            //primer camino, en negro
            ctx.beginPath();
            ctx.arc(75, 75, 60, Math.PI, Math.PI * 0.5, false);
            ctx.arc(75, 75, 32, Math.PI * 0.5, Math.PI * 1, false);
            ctx.closePath()
            ctx.fill();

            //segundo camino, en naranja
            ctx.fillStyle = '#ff8800';
            ctx.beginPath();
            ctx.arc(75, 75, 15, 0, Math.PI * 2, false);
            ctx.fill();
        }

        // curvas cuadraticas
        var ctx = cargaContextoCanvas('myCanvas14');
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(10, 60)
            ctx.quadraticCurveTo(10, 10, 60, 10);
            ctx.lineTo(120, 10);
            ctx.lineTo(120, 50);
            ctx.quadraticCurveTo(120, 110, 60, 110);
            ctx.lineTo(10, 110);
            ctx.fill();
        }

        // curvas bezier 1
        var ctx = cargaContextoCanvas('myCanvas15');
        if (ctx) {
            ctx.beginPath();
            ctx.fillStyle = "#ccccff";
            ctx.moveTo(0, 40);
            ctx.bezierCurveTo(75, 17, 70, 25, 100, 60);
            ctx.bezierCurveTo(130, 35, 140, 45, 145, 50);
            ctx.bezierCurveTo(180, 45, 190, 55, 200, 70);
            ctx.lineTo(200, 150);
            ctx.lineTo(0, 150);
            ctx.fill();
        }

        // curvas bezier 2
        var ctx = cargaContextoCanvas('myCanvas16');
        if (ctx) {
            ctx.beginPath();
            ctx.fillStyle = 'rgba(100,230,100,0.3)';
            ctx.moveTo(0, 90);
            ctx.bezierCurveTo(90, 7, 110, 15, 140, 30);
            ctx.bezierCurveTo(130, 55, 140, 65, 145, 70);
            ctx.bezierCurveTo(180, 45, 190, 55, 200, 95);
            ctx.lineTo(200, 150);
            ctx.lineTo(0, 150);
            ctx.fill();
        }

        // curvas bezier 3
        var ctx = cargaContextoCanvas('myCanvas17');
        if (ctx) {
            ctx.beginPath();
            ctx.fillStyle = 'blue';
            ctx.moveTo(50, 150);
            ctx.bezierCurveTo(90, 7, 110, 15, 160, 10);
            ctx.bezierCurveTo(130, 105, 140, 135, 200, 35);
            ctx.lineTo(200, 150);
            ctx.lineTo(0, 150);
            ctx.fill();
        }



        // smile
        var ctx = cargaContextoCanvas('myCanvas19');
        if (ctx) {
            //Camino para la sonrisa
            ctx.beginPath();
            ctx.lineWidth = 20;
            ctx.lineCap = "round";
            ctx.strokeStyle = '#009';
            ctx.arc(75, 75, 60, Math.PI, 0, true);
            ctx.stroke();

            //ojo izquierdo
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.arc(35, 25, 10, 0, Math.PI, true);
            ctx.stroke();

            //ojo derecho
            ctx.beginPath();
            ctx.arc(110, 25, 10, 0, Math.PI, true);
            ctx.stroke();

            //círculo relleno para la nariz
            ctx.beginPath();
            ctx.arc(73, 50, 10, 0, Math.PI * 2, true);
            ctx.fillStyle = '#009';
            ctx.fill();
        }

        // grosor lineas
        var ctx = cargaContextoCanvas('myCanvas20');
        if (ctx) {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.lineWidth = document.grosor.valorgrosor.selectedIndex + 1;
            ctx.strokeStyle = '#116';
            ctx.beginPath();
            ctx.moveTo(50, 15);
            ctx.lineTo(75, 15);
            ctx.lineTo(75, 75);
            ctx.lineTo(50, 135);
            ctx.lineTo(25, 75);
            ctx.lineTo(25, 15);
            ctx.closePath();
            ctx.stroke();
            //primer punto del camino anterior
            ctx.fillStyle = '#ff8800';
            ctx.fillRect(49, 14, 2, 2);
        }

        // superposicion 2
        var contexto = cargaContextoCanvas('myCanvas22');
        if (contexto) {
            contexto.fillStyle = '#f5f';
            contexto.fillRect(10, 10, 90, 50);
            contexto.fillStyle = '#5ff';
            contexto.fillRect(35, 35, 50, 90);
            contexto.strokeStyle = 'rgba(200, 80, 0, 0.7)';
            contexto.lineWidth = 5;
            contexto.beginPath();
            contexto.moveTo(50, 15);
            contexto.lineTo(130, 85);
            contexto.lineTo(50, 125);
            contexto.lineTo(25, 75);
            contexto.lineTo(25, 15);
            contexto.closePath();
            contexto.stroke();
        }

        // lineas 1
        var contexto = cargaContextoCanvas('myCanvas23');
        if (contexto) {
            contexto.fillStyle = '#f5f';
            contexto.fillRect(10, 10, 90, 50);
            contexto.fillStyle = '#5ff';
            contexto.fillRect(35, 35, 50, 90);
            contexto.strokeStyle = 'rgba(200, 80, 0, 0.7)';
            contexto.lineWidth = 5;
            contexto.beginPath();
            contexto.moveTo(50, 15);
            contexto.lineTo(130, 85);
            contexto.lineTo(50, 125);
            contexto.lineTo(25, 75);
            contexto.lineTo(25, 15);
            contexto.closePath();
            contexto.stroke();
        }
    }


    // ##########
    // loading 1
    // ##########
    var can = function () {
        var canvas;
        var context;

        return {
            draw: function () {
                var r = Math.floor(Math.random() * 255) + 50;
                var g = Math.floor(Math.random() * 255) + 50;
                var b = Math.floor(Math.random() * 255) + 50;
                var s = 'rgba(' + r + ',' + g + ',' + b + ', 0.5)';

                context.rotate(0.2 * Math.PI);
                context.fillStyle = s;
                context.fillRect(0, 0, 100, 30);
            },
            init: function () {
                canvas = document.getElementById("myCanvas");
                context = canvas.getContext("2d");
                // posicion XMLDocument.y
                context.translate(160, 150);
                // velocidad en q aparecen las lineas de colores
                setInterval(can.draw, 100);
            }
        }
    }();



    // ##########
    // loading 2
    // ##########
    var can2 = function () {
        var canvas;
        var context;
        var x = 0;
        var y = 0;

        function currectX() {
            return x = x + 0.5;
        }

        function currectY() {
            return y = y + 0.5;
        }

        return {
            draw: function () {
                var r = Math.floor(Math.random() * 255);
                var g = Math.floor(Math.random() * 255);
                var b = Math.floor(Math.random() * 255);
                var s = 'rgba(' + r + ',' + g + ',' + b + ', 0.5)';

                context.fillStyle = s;
                context.scale(1.1, 1.1);
                context.fillRect(currectX(), currectY(), 10, 10);
            },
            init2: function () {
                canvas = document.getElementById("myCanvas2");
                context = canvas.getContext("2d");
                context.translate(0, 0);
                setInterval(can2.draw, 150); //tiempo
            }
        }
    }();


    // ####
    // mosaico
    // ####
    var can18 = function () {
        // mosaico de imagenes
        var ctx = cargaContextoCanvas('myCanvas18');
        if (ctx) {
            //Creo una imagen con un objeto Image de Javascript
            var img = new Image();
            //indico la URL de la imagen
            img.src = 'https://picsum.photos/id/1041/367/267';
            //defino el evento onload del objeto imagen
            img.onload = function () {
                //Creo un "pattern" en el canvas
                var miPatron = ctx.createPattern(img, 'repeat');
                ctx.fillStyle = miPatron;
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            }
        }
    }

   



    return (
        <>
            <Navbar />
            <h1 className="mt-7 px-4">Botones con estilos</h1>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card pa-3 pb-5 ">
                            <h4 className="ta-c mb-5">Botón simple envío de información</h4>
                            <form action="my-portfolio.javieraizq88.vercel.app/" target="_blank" method="post">
                                <div className="d-flex jc-c">
                                    <input type="text" name="prueba" />
                                </div>
                                <div className="d-flex jc-c pt-3">
                                    <input type="submit" value="enviar" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card pa-3 pb-5">
                            <h4 className="ta-c mb-5">Botón envío de información con color de fondo</h4>
                            <form action="my-portfolio.javieraizq88.vercel.app/" target="_blank" method="post">
                                <div className="d-flex jc-c">
                                    <input type="text" name="prueba1" />
                                </div>
                                <div className="d-flex jc-c pt-3">
                                    <input type="submit" value="enviar" className="boton-1" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card pa-3 pb-5">
                            <h4 className="ta-c mb-9">Botón con hover</h4>
                            <form action="my-portfolio.javieraizq88.vercel.app/" target="_blank" method="post">
                                <div className="d-flex jc-c">
                                    <input type="text" name="prueba2" />
                                </div>
                                <div className="d-flex jc-c pt-3">
                                    <input type="submit" value="enviar" className="boton-2" />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>

            <h1 className="mt-7 px-4">Canvas</h1>
            <div className="container">
                <div className="row">
{/* row 1 */}
                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Loading</h4>
                            <button onClick={can.init}>
                                activar
                            </button>
                            <div className="">
                                <canvas className="d-flex jc-c" id="myCanvas" height="300" width="300"></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Loading 2</h4>
                            <button onClick={can2.init2}>
                                activar
                            </button>
                            <div className="">
                                <canvas className="d-flex jc-c pt-2" id="myCanvas2" height="290" width="300"></canvas>
                                <canvas className="d-none" id="myCanvas2"></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Superposicón de imagenes 1</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas3" height="272" width="100"></canvas>
                            </div>
                        </div>
                    </div>

{/* row 2 */}
                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Superposicion imagenes 2</h4>
                            <div>
                                <canvas id="myCanvas22" width="130" height="200" ></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Curvas con arcos</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas13" width="150" height="150"></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Curvas cuadraticas</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas14" width="150" height="150"></canvas>
                            </div>
                        </div>
                    </div>

{/* row 3 */}
                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Curvas bezier 1</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas15" width="150" height="150"></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Smile</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas19" width="150" height="150"></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Grosor lineas</h4>
                            <div className="mt-4 mb-1 d-flex jc-c">
                                <canvas id="myCanvas20" width="100" height="150"></canvas>
                            </div>
                            <form className="d-flex jc-c" name="grosor">
                                Selecciona un grosor: <select name="valorgrosor" onchange="dibujaTrazado()">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7" selected>7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </form>
                        </div>
                    </div>

{/* row 4 */}
                    <div className="col-12">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Mosaico de imagenes</h4>
                            <button onClick={can18}>Ver</button>
                            <div className="mt-6 px-4 d-flex jc-c">
                                <canvas id="myCanvas18" width="1000" height="500"></canvas>
                            </div>
                        </div>
                    </div>

{/* row 5 */}
                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Grosor lineas</h4>
                            <div>
                                <canvas id="myCanvas23" width="100" height="200" ></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Curvas bezier 2</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas16" width="150" height="150"></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Curvas bezier 3</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas17" width="150" height="150"></canvas>
                            </div>
                        </div>
                    </div>

{/* row 6 */}
                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Rombo</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas4" width="100" height="150"></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Escalera</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas5" width="100" height="150"></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Escalera 2</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas6" width="100" height="150"></canvas>
                            </div>
                        </div>
                    </div>

{/* row 7 */}
                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Hexagono relleno de color, cierre de camino automático con fill</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas7" width="150" height="150"></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Hexagono rellenado con otro color, cierre de camino automático con fill</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas8" width="150" height="150"></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Hexagono sólo línea, sin cierre de camino</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas9" width="150" height="179"></canvas>
                            </div>
                        </div>
                    </div>

{/* row 8 */}
                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Hexagono sólo línea, sin cierre de camino</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas10" width="150" height="150"></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className=" ta-c mb-5 pt-3">Pintar dos caminos distintos</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas11" width="150" height="180"></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mt-4 mb-2 pa-3 pb-5">
                            <h4 className="ta-c mb-5 pt-3">Un camino que pinta en dos lugares distintos</h4>
                            <div className="mt-6 d-flex jc-c">
                                <canvas id="myCanvas12" width="150" height="150"></canvas>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default EstilosCSS;