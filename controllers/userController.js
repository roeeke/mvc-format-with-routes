const Blog = require("../models/userModel");

exports.createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.send(newBlog);
    console.log("user created");
  } catch (err) {
    res.send(err);
  }
};