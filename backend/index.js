const { response } = require('express');
const express = require('express');
const ArticleInfo = require('./src/model/BlogDb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/articles/:name',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    const articleName = req.params.name;
    ArticleInfo.findOne({ name: articleName })
    .then(function(article){
        res.json(article)   
    });
})
//backend routing for upvotes
app.post('/api/articles/:name/upvotes',(req,res)=>{
    const articleName = req.params.name;
    const filter = { name: articleName };
    const update = { $inc:{upvotes : 1 } };
    ArticleInfo.findOneAndUpdate(filter , update , { new : true})
});

//Comments routing 
app.post('/api/articles/:name/comments',(req,res)=>{
    const articleName = req.params.name;
    const { username, text } = req.body;
    const filter = { name : articleName };
    const update = {$push: { comments: { username, text } } }
    ArticleInfo.findOneAndUpdate(filter , update , { new : true})
    .then(function(article){
        res.json(article)
    })
});



app.listen(5000,()=>{
    console.log("Server running at post 5000");
})