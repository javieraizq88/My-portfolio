const getState = ({ getStore, getAction, setStore }) => {
    return {
        store: {
            proyecto: "",
a: 0,
            // encuesta
            name: "",
            age: "",
            marca: {},
            respuesta: {},
            // Star Wars
            people: null,
            films: null,
            starships: null,
            vehicles: null,
            species: null,
            planets: null,
        },

        actions: {

            // Simple Counter


            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },

            // encuesta
            cambiarCheckbox: (e) => {
                const store = getStore()
                if (store.marca.hasOwnProperty(e.target.name)) {
                    const aux = { ...store.marca }
                    delete aux[e.target.name]
                    setStore({ marca: aux })
                }
                else {
                    setStore({ marca: { ...store.marca, [e.target.name]: e.target.value } })
                }
            },
            // le da un valor segun el atributo name y lo agrega al objeto vacío "marca"

            cambiarRespuesta: (e) => {
                const store = getStore()
                if (store.respuesta.hasOwnProperty(e.target.name)) {
                    const aux = { ...store.respuesta }
                    delete aux[e.target.name]
                    setStore({ respuesta: aux })
                }
                else {
                    setStore({ respuesta: { ...store.respuesta, [e.target.name]: e.target.value } })
                }
            },

            // Star Wars
            getPeople: url => {
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            people: data
                        });
                    }).catch(error => {
                        console.log(error)
                    })
            },

            getFilms: url => {
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            films: data
                        });
                    }).catch(error => {
                        console.log(error)
                    })
            },

            getStarships: url => {
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            starships: data
                        });
                    }).catch(error => {
                        console.log(error)
                    })
            },

            getVehicles: url => {
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }) // por default es GET
                    .then(response => response.json())
                    .then(data => {
                        setStore({
                            vehicles: data
                        });
                    }).catch(error => {
                        console.log(error)
                    })
            },

            getSpecies: url => {
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }) // por default es GET
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            species: data
                        });
                    }).catch(error => {
                        console.log(error)
                    })
            },

            getPlanets: url => {
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }) // por default es GET
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            planets: data
                        });
                    }).catch(error => {
                        console.log(error)
                    })
            },
        }
    }
}

export default getState;