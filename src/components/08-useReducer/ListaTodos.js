import React from 'react'
import ListaTodosItem from './ListaTodosItem'

const ListaTodos = ({todos,handleDelete,handleToggle}) => {



    return (
        <>
          <ul className="list-group list-group-flush ">
            {todos.map((todo, i) => (
              <ListaTodosItem 
                key={todo.id}
                todo={todo}
                i={i}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
              />
            ))}
          </ul>  
        </>
    )
}

export default ListaTodos
