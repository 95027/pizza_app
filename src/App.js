import './App.css';
import Routings from "./components/Routings";
import Footer from './components/footer/Footer';
import Navbar from "./components/header/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Routings/>
      <Footer/>
    </div>
  );
}

export default App;
