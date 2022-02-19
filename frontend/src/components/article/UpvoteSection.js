import React from 'react';
import './Articles.css';

function UpvoteSection(props) {
    const {name , upvotes, setarticleData } = props;
   async function fetchUpVotes(){
        const response = await fetch(`http://localhost:5000/api/articles/${name}/upvotes`,{
            method: 'post'
        });
        const body = await response.json();
        setarticleData(body);
    }


    return (
        <div>
            <button className='like' onClick={fetchUpVotes}>Upvote</button>
            <p>This article has {upvotes} upvotes</p>

        </div>
    );
}

export default UpvoteSection;