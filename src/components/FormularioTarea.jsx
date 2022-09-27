import React, { useState, useEffect } from "react";
import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";





const FormularioTarea = () => {
  //busco los datos del localstorage
  const tareasLocalStorage = JSON.parse(localStorage.getItem("arregloTareaKey")) || [];
  // aqui va la  mayoria de la logica
  const [tarea, setTarea] = useState("");
  const [arregloTarea, setArregloTarea] = useState(tareasLocalStorage);

  //ciclo de vide del componente
  useEffect(()=>{
    //guardar en local storage
    localStorage.setItem("arregloTareaKey", JSON.stringify(arregloTarea));
  },[arregloTarea])

  const handleSubmit = (e) => {
    e.preventDefault();
    //arregloTarea.push no se puede hacer push si se usa state
    setArregloTarea([...arregloTarea, tarea]);
    //limpiar inputo
    setTarea("");
  };

  const borrarTarea = (nombre)=>{
    let arregloModificado = arregloTarea.filter((item)=>(item !== nombre))
    //actualizo el state
    setArregloTarea (arregloModificado)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>

      <ListaTarea arregloTarea={arregloTarea} borrarTarea={borrarTarea}></ListaTarea>
    </div>
  );
};

export default FormularioTarea;
