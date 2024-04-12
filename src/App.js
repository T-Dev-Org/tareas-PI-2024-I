import React, { useState } from 'react';
import Navigation from './components/Navigation';
import imagenes from './images/imagenes'

function App() {
  const [appState, setAppState] = useState({
    "appName": "Tareas de Proyecto Integrador 2024-1",
    "appVersion": "1.1"
  });

  return (<>
    <Navigation
      appName={appState.appName}
      logoApp={imagenes.logoApp}
    />
    <div className="App">
      <div className="container-fluid mt-5">
        <div className="row">
          {/* Columna para la descripción */}
          <div className="col-lg-7 ml-4 mr-2 py-4">
            <div className="card h-100 rounded-4">
              <div className="card-header pt-4">
                <div className="h2 card-title mb-4">¿Que es esta página?</div>
              </div>
              <div className="card-body">
                <p className="card-text h5 pt-4 px-4">
                  Esta página que estás viendo es un despliegue de la rama master del repositorio donde subimos nuestras tareas de Proyecto Integrador, este despliegue funciona como guía para acceder a las tareas. Aquí encontrarás enlaces a los diferentes despliegues de las tareas para acceder rapidamente a ellas.
                </p>
              </div>
              <div className="card-footer py-4">
                <p className="card-text h5 px-4">
                  Visita nuestro
                  <a href="https://github.com/T-Dev-Org/tareas-PI-2024-I" target="_blank" rel="noopener noreferrer" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover mx-2">
                    repositorio de github
                  </a>
                  para ver los códigos fuente.
                </p>
              </div>
            </div>
          </div>

          {/* Columna para la lista de proyectos */}
          <div className="col-lg-5 ml-2 mr-4 py-4">
            <div className="card h-100 rounded-4">
              <div className="card-header pt-4">
                <h1 className="card-title mb-4">Despliegues</h1>
              </div>
              <div className="card-body">
                <div className="list-group">
                  <a href="https://tarea-sesion-2.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning m-2 rounded-5 text-dark">
                    <p className="h6 mt-2">tarea-sesion-2</p>
                  </a>
                  <a href="https://tarea-sesion-3.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning m-2 rounded-5 text-dark">
                    <p className="h6 mt-2">tarea-sesion-3</p>
                  </a>
                  <a href="#" className="btn btn-outline-warning m-2 rounded-5 text-dark">
                    <p className="h6 mt-2">Actualizando...</p>
                  </a>
                  {/* Agrega más enlaces según sea necesario */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

  );
}

export default App;
