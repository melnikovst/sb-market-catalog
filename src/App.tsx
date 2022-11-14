import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CardFullfied from './pages/Catalog/CardPage/CardFullfied';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog/:id" element={<CardFullfied />} />
      </Routes>
    </div>
  );
};

export default App;
