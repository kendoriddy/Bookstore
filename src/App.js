import './App.css';
import AddNewBook from './components/AddNewBook';
import BookContainer from './components/BookContainer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <BookContainer />
      <AddNewBook />
    </div>
  );
}

export default App;
