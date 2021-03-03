import './App.css';
import { Button } from '@material-ui/core';
import News from './componenets/News/News';
import { useEffect, useState } from 'react';



function App() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f58ff1ebf86f44b4af023aef22ba17c5"
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  }, [])
  return (
    <div>
      <h3>headline : {articles.length}</h3>
      {
        articles.map(art => <News article={art}></News>)
      }

    </div>
  );
}

export default App;


