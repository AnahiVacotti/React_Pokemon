import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div >
        <Navbar />
        <ItemListContainer greeting="Bienvenidos entrenadores pokemon"/>
    </div>
    
  );
}

export default App;
