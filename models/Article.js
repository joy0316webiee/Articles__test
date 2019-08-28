const moogoose = require('mongoose');
const Schema = moogoose.Schema;

// Create Schema
const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Article = moogoose.model('articles', ArticleSchema);
