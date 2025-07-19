import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="content">
      <Home />
      <Footer />
      </div>
    </div>
  );
}

export default App;