import React, { useState } from "react";
import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";

const FormularioTarea = () => {
  // aqui va la  mayoria de la logica
  const [tarea, setTarea] = useState("");
  const [arregloTarea, setArregloTarea] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //arregloTarea.push no se puede hacer push si se usa state
    setArregloTarea([...arregloTarea, tarea]);
    //limpiar inputo
    setTarea("");
  };

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

      <ListaTarea arregloTarea={arregloTarea}></ListaTarea>
    </div>
  );
};

export default FormularioTarea;
