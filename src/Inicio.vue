<template>
    <div id="app">
      <!-- Navbar -->
      <div>
        <div>
          <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand class="titile-nav">Betjader Ortiz</b-navbar-brand>
  
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item>Tarea 1</b-nav-item>
                <b-nav-item style="color: ;">Page Layout</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
  
  
      <header>
        <h2 class="header-text">Mis jugadores favoritos <span class="nba">NBA</span></h2>
      </header>
  
      <div class="container-fluid">
        <b-row>
          <b-col md="3">
            <div class=" p-3">
          
              <b-nav vertical class="pt-5">
  
                <!-- <b-nav-item 
                  ><b-link :to="{ name: 'inicio' }">
                 Inicio
                    </b-link>
                </b-nav-item> -->
              
                <b-nav-item 
                  ><b-link :to="{ name: 'electronicos' }">Tienda de jugetes</b-link>
                </b-nav-item>
              
                <b-nav-item 
                  ><b-link :to="{ name: 'electrodomesticos' }">Tienda de electrodomesticos</b-link>
                </b-nav-item>
                <b-nav-item 
                ><b-link :to="{ name: 'hogar' }">Tienda de Hogar</b-link>
              </b-nav-item>
              <b-nav-item 
              ><b-link :to="{ name: 'formulario' }">Formulario</b-link>
            </b-nav-item>
            <b-nav-item>
                <b-button  to="/formulario">Formulario</b-button>
          </b-nav-item>
          <b-nav-item>
                <b-button  to="/persona">Persona</b-button>
          </b-nav-item>
          <b-nav-item>
                <b-button  to="/peliculas">Peliculas</b-button>
          </b-nav-item>

              </b-nav>
            </div>
          </b-col>
  
  
          <b-col md="9">
            <div class="px-3 py-2">
  
              <!-- <b-container class="bv-example-row">
                <b-row>
                  <b-col>
  
                    <div>
                      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                        <b-row no-gutters>
                          <b-col md="6">
                            <b-card-img src="https://i.pinimg.com/564x/59/24/c0/5924c0ebb88340847cb52203aba21a59.jpg"
                              alt="Image" class="rounded-0"></b-card-img>
                          </b-col>
                          <b-col md="6">
                            <b-card-body title="Zach Lavine">
                              <b-card-text>
                                <strong>Posición: </strong> Escolta / Alero.
                                <br>
                                <strong> Equipo Actual:</strong> Chicago Bulls.
                                <br>
                                <strong> Características</strong> LaVine es conocido por su increíble habilidad atlética,
                                destacando en mates
                                espectaculares y tiros de larga distancia. Es un anotador versátil y ha mejorado
                                constantemente a lo largo de su carrera.
                              </b-card-text>
                            </b-card-body>
                          </b-col>
                        </b-row>
                      </b-card>
                    </div>
                    <br>
                  </b-col>
                  <b-col>
                    <div>
                      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                        <b-row no-gutters>
                          <b-col md="6">
                            <b-card-img src="https://i.pinimg.com/564x/cd/7d/42/cd7d42ff04508924477b812eb15bbe98.jpg"
                              alt="Image" class="rounded-0"></b-card-img>
                          </b-col>
                          <b-col md="6">
                            <b-card-body title="Jimmy buttler">
                              <b-card-text>
                                <strong>Posición: </strong> Alero / Escolta.
                                <br>
                                <strong> Equipo Actual:</strong> Miami Heat.
                                <br>
                                <strong> Características</strong> Butler es un jugador completo con habilidades tanto
                                ofensivas como
                                defensivas. Destaca por su ética de trabajo, liderazgo y capacidad para realizar jugadas
                                cruciales en momentos importantes. Es conocido por su mentalidad competitiva.
                              </b-card-text>
                            </b-card-body>
                          </b-col>
                        </b-row>
                      </b-card>
                    </div>
                  </b-col>
                  <div class="w-100"></div>
                  <b-col>
                    <div>
                      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                        <b-row no-gutters>
                          <b-col md="6">
                            <b-card-img src="https://i.pinimg.com/564x/18/40/a9/1840a91d5d7aa60924a16e29a3e7ed88.jpg"
                              alt="Image" class="rounded-0"></b-card-img>
                          </b-col>
                          <b-col md="6">
                            <b-card-body title="Paul George">
                              <b-card-text>
                                <strong>Posición: </strong> Alero / Escolta.
                                <br>
                                <strong> Equipo Actual:</strong> Los Angeles Clippers.
                                <br>
                                <strong> Características</strong> George es un jugador versátil que puede anotar desde
                                cualquier posición en
                                la cancha. Tiene una combinación de habilidades ofensivas y defensivas, siendo un excelente
                                tirador y defensor perimetral.
                              </b-card-text>
                            </b-card-body>
                          </b-col>
                        </b-row>
                      </b-card>
                    </div>
                  </b-col>
                  <b-col>
                    <div>
                      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                        <b-row no-gutters>
                          <b-col md="6">
                            <b-card-img src="https://i.pinimg.com/564x/ee/cb/f8/eecbf8cd06be5e1e28359a6d0d6531ca.jpg"
                              alt="Image" class="rounded-0"></b-card-img>
                          </b-col>
                          <b-col md="6">
                            <b-card-body title="Russel Westbrook">
                              <b-card-text>
                                <strong>Posición: </strong> Base/Escolta.
                                <br>
                                <strong> Equipo Actual:</strong> Clippers.
                                <br>
                                <strong> Características</strong> Westbrook es conocido por su increíble explosividad y
                                capacidad atlética.
                                Es un base excepcionalmente versátil que puede anotar, asistir y capturar rebotes a un nivel
                                elite. Su estilo de juego agresivo lo ha llevado a numerosos logros y ha sido reconocido por
                                su intensidad en la cancha.
                              </b-card-text>
                            </b-card-body>
                          </b-col>
                        </b-row>
                      </b-card>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
  -->
  
  <!-- Principal -->
          <div>
            <router-view/>
          </div>
            </div> 
          </b-col>
        </b-row>
      </div>
  
  
      <footer class="mt-auto">
        <div class="bg-light p-3">
          <p class="footer-text">Pagina hecha por Betjader Ortiz Delgado 8B-IDGS</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          slide: 0,
          sliding: null
        }
      },
      methods: {
        onSlideStart(slide) {
          this.sliding = true
        },
        onSlideEnd(slide) {
          this.sliding = false
        }
      }
    }
  </script>
  
  <style>
  body {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .titile-nav {
    font-size: 30px;
    color: #085ba6;
    font-weight: bold;
  }
  
  .header-text {
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
  }
  
  .nba {
    color: #085ba6;
    font-size: 30px;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: bold;
  }
  
  .sidebar-text {
    font-size: 20px;
    margin-left: 10px;
    color: red;
  }
  
  .footer-text {
    font-size: 20px;
    text-align: center;
    color: #085ba6;
  }
  </style>