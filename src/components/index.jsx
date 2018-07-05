import React, { Component } from  'react';
import PropTypes from 'prop-types';
import CoursesList from "./CoursesList";
import CoursesAddF from "./CoursesAddF";

class App extends Component {
    constructor(...props){
        super(...props);
        this.state = {
            courses: [
                { id: 1, name: 'React desde cero', teacher: 'Jhonatan Mircha'},
                { id: 2, name: 'Drupal 8 desde cero', teacher: 'Alberto Quirog'}
            ]
        }
        this.handleOnAddCourse = this.handleOnAddCourse.bind(this);
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

    // nodo hijo
// {/*// llamando un component externo sin states*/}
// {/*// añade una props juego de propiedades con el estado*/}
// {/*// se conoce como optimizando por pedasos de vistas*/}
// {/*// le enviamos propiedades a los components hijo - courseList*/}
// // se debe agregar en el form la variable creada
    render(){
        return(
            <div>
            <CoursesAddF onAddCourse={this.handleOnAddCourse}/>
            <CoursesList  courses={this.state.courses} />
            </div>
        )
    }



}
    App.propTypes =  {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        teacher: PropTypes.string.isRequired
    }

    // ayuda a validar el formulario a mostrar el mensaje alerrt
    App.defaultProps = {
    name: 'Campo nombre es requerido',
    teacher: 'Campor profe es requerido'
    }

// exporta el archivo App
export default App