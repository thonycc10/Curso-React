import React from 'react'
import uid from 'uid'

const CoursesAddF = (props) => (
    <form onSubmit={props.onAddCourse}>
        <input type="text" placeholder="Nombre del curso" name="name" />
        <input type="text" placeholder="Profesor" name="teacher"  />
        {/*<input type="hidden" name="id" value={Math.floor(Math.random()*100)} />*/}
        <input type="hidden" name="id" value={uid(10)}/>
        <input type="submit" value="Agregar"/>
    </form>
)

export default CoursesAddF