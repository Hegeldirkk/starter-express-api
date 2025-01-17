const { mongoose } = require('mongoose');

const blogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true 
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
});

const Blog = mongoose.model('Blogpost', blogSchema);

module.exports = Blog;