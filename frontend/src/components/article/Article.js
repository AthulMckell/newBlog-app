import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Articles.css';
import articleContent from './SampleDb';
import Error from '../error/Error';
import Comments from './Comments';
import UpvoteSection from './UpvoteSection';

function Article(props) {
   const { name } = useParams();
    //temporRY STORAGE OF DB
   const [articleData, setarticleData ] = useState({ upvotes: 0, comments:[] });

   //matching the url parameter with the db data
  const article = articleContent.find(i => i.name === name);
  
  //Backend connection API fetch
  useEffect(() =>{
      fetchAPI();
  },[name]);

  async function fetchAPI(){
    const response = await fetch(`http://localhost:5000/api/articles/${name}`);
    const body = await response.json();
    console.log(body);
    setarticleData(body);
  }

//if article not exixt
  if(!article) return <Error />

    return (
        <div >
            <h1 className='article'>This is { article.name } article</h1>
            <UpvoteSection name= {name} setarticleData={setarticleData} upvotes={articleData.upvotes} />
            <p>{ article.description }</p>
            <Comments comments={articleData.comments}/>
        </div>
    );
}

export default Article;