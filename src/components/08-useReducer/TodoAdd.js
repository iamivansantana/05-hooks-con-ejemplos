import React from 'react';
import {useForm} from '../../hook/useForm';

const TodoAdd = ({handleAddTodo}) => {

    //utilizando el customHook useForm para llenar formulario
    const [{description},handleInputChange,reset]=useForm({
        description:''
    });  

    //Agregar***
  const handleSubmit = (e) => {
    e.preventDefault(); 

    //Validacion del campo
    if(description.trim().length <=1){
      return;
    }
    //Estructura para nuevoTodo
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

    return (
        <>
            <h4>Agregar TODO </h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control "
              placeholder="aprender..."
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Agregar
            </button>
          </form>
        </>
    )
}

export default TodoAdd
