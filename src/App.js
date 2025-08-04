// App.jsx ✅ الصحيح
import './App.css';
import Contener from './Contener';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Contener />
    </BrowserRouter>
  );
}

export default App;
