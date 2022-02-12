const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:azerbaijan@cluster0.ewrjb.mongodb.net/blog-app?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

var articleSchema = new Schema({
        name: String,
        username:String,
        upvotes:Number,
        comments:Array
});

var ArticleInfo = mongoose.model('articles',articleSchema);

module.exports = ArticleInfo;
