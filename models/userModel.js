const e = require("express");
const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({

    usernames:{
        type: String, 
    }
})

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;