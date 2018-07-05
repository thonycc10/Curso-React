/*
 este no es necesario un constructor porque no tiene estado
 como no tiene prototypes se puede exportar la clase
*/

import React from 'react';
import Courses from "./Courses";

// se crear este around function para pasar las propiedades del padre al hijo (se quita render y return brevedad de codigo)
const  CoursesList = (props) => (
                <ul>
                    {/*// realizar recorrido de una lista props.course, se usa el petodo map*/}
                    {
                        props.courses.map(courses => (
                            <Courses
                                key={courses.id}
                                id={courses.id}
                                name={courses.name}
                                teacher={courses.teacher}
                            />
                        ))
                    }
                </ul>
        )

export default CoursesList