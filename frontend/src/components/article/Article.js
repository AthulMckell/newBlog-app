import React from 'react';
import { useParams } from 'react-router-dom';
import './Articles.css';
import articleContent from './SampleDb';
import Error from '../error/Error';

function Article(props) {
   const { name } = useParams();

   //matching the url parameter with the db data
  const article = articleContent.find(i => i.name === name);
  if(!article) return <Error />
  
    return (
        <div className='article'>
            <h1>This is { article.name } article</h1>
            <p>{ article.description }</p>
        </div>
    );
}

export default Article;