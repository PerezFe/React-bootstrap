import React from "react";
import ListaTarea from "./ListaTarea";
import {Form, Button} from "react-bootstrap"

const FormularioTarea = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      <ListaTarea></ListaTarea>
    </div>
  );
};

export default FormularioTarea;
