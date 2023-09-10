import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Catalog from './components/pages/catalog';
import logo from './components/header-pic.png';

function App() {
  return (
    <div className="App">
      <h1>GIGI'S KICK'IN HEELS LOUNGE</h1>
      <header className="App-header">
  <div className="image-container">
    <img src={logo} className="header-pic" alt="logo" />
  </div> <div className="image-container">
    <img src={logo} className="header-pic" alt="logo" />
  </div>
  <div className="image-container">
    <img src={logo} className="header-pic" alt="logo" />
  </div>
</header>
  
  
      <NavBar/>

      <div className='page-content'>
        <Catalog/>
      </div>

      {/* You had an extra <Catalog/> outside of 'page-content', I've removed it. 
         If you meant to have two Catalog components, simply add it back. */}

      <Footer/>
    </div>
  );
}

export default App;
