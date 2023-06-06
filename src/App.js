import './App.css';
import Routings from "./components/Routings";
import Footer from './components/footer/Footer';
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routings/>
      <Footer/>
    </div>
  );
}

export default App;
