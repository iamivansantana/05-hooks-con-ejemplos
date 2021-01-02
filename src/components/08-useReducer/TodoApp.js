import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { todoReducer } from "./todoReducer";
import ListaTodos from "./ListaTodos";
import TodoAdd from "./TodoAdd";


//Lo que retorna init es lo que sera el initialstate
const init = () =>{
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

  //useReducer
  //Si init retorna null con "[]" indicamos que el initialstate sera un arreglo vacio
  const [todos, dispatch] = useReducer(todoReducer, [],init);


  //Effect que escucha cuando un TODO cambia.
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos]);

  //Eliminar***
  const handleDelete = (todoId)=>{
    //Crear la accion
    const action = {
      type: 'delete',
      payload: todoId
    };
    //Dispatch
    dispatch(action);
  }

  //Cambiar el Done***
  const handleToggle = ( todoId )=>{
    dispatch({
      type: 'toggle',
      payload: todoId
    });
  }

  //handleAdd
  const handleAddTodo =( newTodo )=>{
    //Dispatch encargado de mandar la action  al todoReducer 
    dispatch({
      type: "add",
      payload: newTodo
    });
  }

  return (
    <div>
      <h1>desde Todo ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">

          <ListaTodos 
            todos ={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        
        </div>
        <div className="col-5">
          <TodoAdd 
            handleAddTodo={handleAddTodo}
          />
        </div>
      </div>
    </div>
  );
};
