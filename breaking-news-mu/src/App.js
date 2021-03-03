import './App.css';
import News from './components/News/News';
import { useEffect, useState } from 'react';

import axios from 'axios';
import Recharts from './components/Recharts/Recharts';



function App() {
  const [articles, setArticles] = useState([])
  // fetch api 
  // useEffect(() => {
  //   const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f58ff1ebf86f44b4af023aef22ba17c5"
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setArticles(data.articles))
  // }, [])

  // axios 
  useEffect(() => {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f58ff1ebf86f44b4af023aef22ba17c5"
    axios(url)
      .then(data => setArticles(data.data.articles))
  }, [])

  return (
    <div>
      <Recharts></Recharts>
      <h3>headline : {articles.length}</h3>
      {
        articles.map(art => <News article={art}></News>)
      }

    </div>
  );
}

export default App;


