import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
} from 'react-router-dom'
/*autotificacion fake autentificacion*/

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
    setTimeout(cb, 100)
    },
    signout(cb){
        this.isAuthenticated = false
    setTimeout(cb, 100)
    }
}


const Home = () =>(
    <div>
        <h2>Bienvenido a mi pagina</h2>
    </div>
)

const Public = () =>(
    <div>
        <h2>hola Public</h2>
    </div>
)

const Protected = () =>(
    <ul>
        <li>hola Protected</li>
        <li>hola Protected</li>
    </ul>
)

// withRouter ayuda a verificar el historiar
const AuthButton = withRouter(( {history} ) => (
    (fakeAuth.isAuthenticated)
        ?
        <div>
            <h2>!Bienvenid@! ;)</h2>
            <button onClick={() => fakeAuth.signout(() => history.push('/'))}>Salir</button>
        </div>
        :
        <div>
            <h2>!No, estas Logueado! :(</h2>
        </div>
))

const PrivateRoute = ({component: Component, rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated
           ? <Component {...props} />
           : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    )}
    />

)


class Login extends Component{
    constructor(...props){
        super(...props)
        this.state ={
            redirectRouter: false
        }
        this.login = this.login.bind(this);
    }

    login(){
        fakeAuth.authenticate(() => this.setState({redirectRouter: true}))
    }

    render(){
        const {from} = this.props.location.state || {from: { pathname: '/'}}
        const {redirectRoute} = this.state

        if( redirectRoute ){
            return(
                <Redirect to={from}/>
            )
        }else{
            return(
                <div>
                    <h3>Debes de estar logueado para ver esta pagina
                    <mark>{from.pathname}</mark></h3>
                    <button onClick={this.login}>Log in</button>
                </div>
            )
        }
    }
}

const AuthSite = () => (
    <Router>
        <div>
            <AuthButton />
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/public">PAGINA PUBLIC</Link></li>
                <li><Link to="/protected">PAGINA PROTECTED</Link></li>
            </ul>
            {/*switch cual ruta sera publica o privada*/}
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/public" component={Public}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/protected" component={Protected} />
            </Switch>
        </div>
    </Router>
)

export default AuthSite