import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

const StaticSite  = () => (
    <Router>
        <div>
            <h1>Primero passos con React Router</h1>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/acerca">ACERCA</Link></li>
                    <li><Link to="/servicios">SERVICIOS</Link></li>
                    <li><Link to="/contacto">CONTACTO</Link></li>
                </ul>
            </nav>
            <hr/>
            {/*los route son los que realizan los cambios para mostrar en la vista*/}
                <Route path="/" component={Home}/>
                <Route path="/acerca" component={Acerca}/>
                <Route path="/servicios" component={Servicios}/>
                <Route path="/contacto" component={Contacto}/>
        </div>
    </Router>
)

{/*// definir los componentes estatico*/}

const Home = () =>(
    <div>
        <h2>Bienvenido a mi pagina</h2>
    </div>
)

const Acerca = () =>(
    <div>
        <h2>hola Acerca</h2>
    </div>
)

const Servicios = () =>(
    <ul>
        <li>hola Service</li>
        <li>hola service</li>
    </ul>
)
// match obtienes la ruta de donde te encuentras ubicado
const Contacto = ( {match} ) =>(
    <div>
        <h2>hola Contacto</h2>
        <Route path={`${match.url}/:contactoInfo`} component={InfoContacto}/>
        {/*<Route path="/hola" component={Hola}/>*/}
        {/*ejemplo no es de buena practicas*/}
        <Route exact path={match.url} render={() => (
            <h3>Mantente en contacto conmigo :3</h3>
        )}/>
        <ul>
            <li><Link to={`${match.url}/hola`}>Hola</Link></li>
        </ul>
    </div>
)

const InfoContacto = ({match}) => (
    <div>
        <h4>{match.params.contactoInfo}</h4>
    </div>
)

export default StaticSite