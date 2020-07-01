const getState = ({ getStore, getAction, setStore }) => {
    return {
        store: {

            // Star Wars
            people: null,
            films: null,
            starships: null,
            vehicles: null,
            species: null,
            planets: null,
        },

        actions: {

            // Form1
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
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