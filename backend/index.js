const { response } = require('express');
const express = require('express');
const ArticleInfo = require('./src/model/BlogDb');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/articles/:name',(req,res)=>{
    const articleName = req.params.name;
    ArticleInfo.findOne({ name: articleName })
    .then(function(article){
        res.json(article)   
    });
})
//backend routing for upvotes
app.post('/api/articles/:name/upvotes',(req,res)=>{
    const articleName = req.params.name;
    articleInfo[articleName].upvotes +=1;
    res.send(`${articleName} now has ${articleInfo[articleName].upvotes} upvotes`);
});

//Comments routing 
app.post('/api/articles/:name/comments',(req,res)=>{
    const articleName = req.params.name;
    const { username, text } = req.body;
    articleInfo[articleName].comments.push({username, text});
    res.send(articleInfo[articleName]);
});



app.listen(5000,()=>{
    console.log("Server running at post 5000");
})