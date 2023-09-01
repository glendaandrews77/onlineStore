
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './components/catalog';
import Product from './components/product';

function App() {
  return (
    <div className="App">
      <h1> Hello from React</h1>
     <Navbar/>
     <Footer></Footer>
     <Catalog />
     <Product/>
   
    </div>
  );
}

export default App;


