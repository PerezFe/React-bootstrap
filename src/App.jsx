import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormularioTarea from './components/FormularioTarea';

function App() {
  return (
    <Container className='my-5'>
      <h1 className='display-4 text-center'>Lista de Tareas</h1>
      <hr></hr>
      <FormularioTarea></FormularioTarea>
    </Container>
  );
}

export default App;
