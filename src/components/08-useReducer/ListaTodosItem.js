import React from 'react'

const ListaTodosItem = ({todo,i,handleToggle,handleDelete}) => {
    return (
        <>
            <li 
                key={todo.id} 
                className="list-group-item"
              >
                <p 
                  //Si (todo.done) es true con el operador '&&' se agrega la clase complete
                  className={`${todo.done && 'complete'}`}
                  onClick={()=>handleToggle(todo.id)}
                >
                  {i + 1}. {todo.desc}
                </p>
                <button 
                className="btn btn-danger"
                onClick={()=>handleDelete(todo.id)}
                >borrar</button>
              </li>  
        </>
    )
}

export default ListaTodosItem
