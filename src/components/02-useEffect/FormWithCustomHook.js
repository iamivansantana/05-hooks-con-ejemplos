import React, {  useState } from "react";
import "./effects.css";


const FormWithCustomHook = () => {
  const [formState, setFormState] = useState({ 
      name: "", 
      email: "",
      password: '' 
    });

  const { name, email, password } = formState;

  
  const handleInputChange = (e)=>{
      
      setFormState({
          ...formState,
            [e.target.name] : e.target.value
      })

  }

  return (
    <>
      <h1>FormWithCustomHook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre" 
          autoComplete="off"
          value={name}
          onChange={ handleInputChange }
        />
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu email"
          autoComplete="off"
          value={email}
          onChange={ handleInputChange }
        />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder=" **** "
          value={password}
          onChange={ handleInputChange }
        />
      </div>

    

    </>
  );
}; 

export default FormWithCustomHook;
