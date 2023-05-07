import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import MobileHome from './pages/MobileHome';

function App() {
  return (
    document.documentElement.clientWidth > 600 ? <Home /> :
    <MobileHome />
  );
}

export default App;
