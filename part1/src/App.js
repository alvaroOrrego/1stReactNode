import './App.css';
import Mensaje from './Mensaje.js';

const Description = () => {
  return <p>
    Esta es la app del curso fullstack bootcamp
  </p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='blue' message='en un curso'/>
      <Mensaje color='green' message='de React'/>

      <Description />
    </div>
  );
}

export default App;
