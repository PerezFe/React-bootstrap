import React from 'react';
import ItemTarea from './ItemTarea';
import {ListGroup} from 'react-bootstrap/'; // import {ListGroup, xxx} puedo invocar mas componentes

const ListaTarea = () => {
    return (
                <ListGroup>
                    <ItemTarea></ItemTarea>
                </ListGroup>
                
    );
};

export default ListaTarea;
