import React, { useEffect, useState } from "react";
import "./effects.css";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({ name: "", email: "" });

  const { name, email } = formState;

  useEffect(() => {
      
    // console.log("hey!");
  },[]);

  useEffect(() => {
      
    // console.log("FormStateCambio");
  },[formState]);
  useEffect(() => {
      
    // console.log("cambioEmail!");
  },[email]);

  const handleInputChange = (e)=>{
      
      setFormState({
          ...formState,
            [e.target.name] : e.target.value
      })

  }

  return (
    <>
      <h1>use Effect</h1>
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
      </div>

    {(name === '123') && <Message />}

    </>
  );
}; 

export default SimpleForm;
