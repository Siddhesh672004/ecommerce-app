import './App.css'
import Home from './components/pages/Home';
import Header from "./components/Header/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <div className="main-content">
        <Home/>
      </div>
      <Footer/>
    </>
  )
}

export default App;
