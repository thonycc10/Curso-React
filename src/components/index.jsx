import React, { Component } from  'react';
import PropTypes from 'prop-types';
import CoursesList from "./CoursesList";
import CoursesAddF from "./CoursesAddF";
// formato de importar al salir de la carpeta externa
import {courses} from "../data/courses"
import uid from "uid"

class App extends Component {
    constructor(...props){
        super(...props);
        this.state = {
            courses: []
        }
        this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
        this.fetchData = this.fetchData.bind(this)
        this.resetData = this.resetData.bind(this)
    }

    // conocidos como manejadores -> eventos
    // se debe de mostrar en el constructor crear bin Buena practicas
    handleOnAddCourse(event) {
            // alert('activo');
            // para evitar mostrar los datos en la uri
        event.preventDefault()

        let form = event.target,
        course = {
        id: form.id.value,
        name: (form.name.value) ? form.name.value : App.defaultProps.name,
        teacher: (form.teacher.value) ? form.teacher.value : App.defaultProps.teacher
        }

        // para actulizar el state se utilizar el setState
        this.setState({
            courses: this.state.courses.concat([course])
        })

        form.reset();
    }
    //cada vez que se crea un metodo se debe bin en el controller.
    fetchData(event) {
// temporizador que recibe un callback y un tiempo en minisegundos para ejecutarce
        setTimeout(() => this.setState({ courses:courses}), 2000)
    }

    resetData(event){
        // resete el estado a nada
        this.setState({ courses: []})
    }

    componentDidMount() { // se ejecuta despues del render
        this.fetchData()
    }

    // nodo hijo
// {/*// llamando un component externo sin states*/}
// {/*// añade una props juego de propiedades con el estado*/}
// {/*// se conoce como optimizando por pedasos de vistas*/}
// {/*// le enviamos propiedades a los components hijo - courseList*/}
// // se debe agregar en el form la variable creada
    // creando componente dinamico if
    render(){
        if( !this.state.courses.length){
            return(
                <div>
                    <p>No hay cursos :c </p>
                    <button onClick={this.fetchData}> Cargar Cursos </button>
                </div>
            )
        }else{
        return(
            <div>
            <CoursesAddF onAddCourse={this.handleOnAddCourse}/>
            <CoursesList  courses={this.state.courses} />
                <button onClick={this.resetData}> Borrar Cursos </button>
            </div>
        )
        }
    }



}
    App.propTypes =  {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        teacher: PropTypes.string.isRequired
    }

    // ayuda a validar el formulario a mostrar el mensaje alerrt
    App.defaultProps = {

    id: uid(10),
    name: 'Campo nombre es requerido',
    teacher: 'Campor profe es requerido'
    }

// exporta el archivo App
export default App