import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import AddItem from './components/AddItem';
import StackerTracker from './pages/StackerTracker';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  const [stack, setStack] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const handleAddItem = (newItem) => {
    setStack([...stack, newItem]);
  };

  const handleDeleteItem = (id) => {
    const updatedStack = stack.filter((item) => item.id !== id);
    setStack(updatedStack);
  }

  const handleEditItem = (item) => {
  setEditingItem(item);
};

const handleUpdateItem = (updatedItem) => {
  const updatedStack = stack.map((item) =>
    item.id === updatedItem.id ? updatedItem : item
  );
  setStack(updatedStack);
  setEditingItem(null);
};

  return (
    <div className="layout">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="content">
        <Sidebar menuOpen={menuOpen} />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home stack={stack} onAdd={handleAddItem} />} />
            <Route path="/add" element={<AddItem onAdd={handleAddItem} />} />
            <Route path="/stack" element={<StackerTracker 
              stack={stack} 
              onDelete={handleDeleteItem} 
              onEdit={handleEditItem}
              editingItem={editingItem}
              setEditingItem={setEditingItem}
              onUpdate={handleUpdateItem} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;