import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css'
import articleContent from './SampleDb';

function ArticleList(props) {
    return (
        <div>
            <h1 id='articles'>Articlelist</h1><br></br> 
            {/*iterating the values and displaying from db */}
            {articleContent.map((i, key)=>(
                <Link id="articles"  key={key} to={`/article/${i.name}`}>
                <h3>{i.title}</h3>
                </Link>
            ))}
        </div>
    );
}

export default ArticleList;