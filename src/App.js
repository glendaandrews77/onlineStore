import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
// import QuantityPicker from './components/quantityPicker';
import Catalog from './components/pages/catalog';
// import Product from '../src/components/product';
import logo from './components/Website-logo.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Website-logo.svg" alt="logo" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NavBar/>
     <div className='page-content'>
      <Catalog/>

    </div>

      <Footer></Footer>
    </div>

  );
}


export default App;