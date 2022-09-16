import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookContainer from './components/BookContainer';
import Categories from './components/Categories';
import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BookContainer />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
