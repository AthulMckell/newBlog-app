import Home from './components/home/Home';
import About from './components/about/About';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ArticleList from './components/article/ArticleList';
import Article from './components/article/Article';
import Error from './components/error/Error';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path = '/about' element={<About />} />
        <Route path='/articlelist' element={< ArticleList />} />
        <Route path='/article/:name' element={<Article />} />
        <Route path='*' element={<Error />} />
      </Routes>
   </>
   </Router>
  );
}

export default App;
