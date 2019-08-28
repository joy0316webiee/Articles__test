const express = require('express');
const router = express.Router();

// Article model
const Article = require('../../models/Article');

// @route   GET api/articles
// @desc    Get articles
// @access  Public
router.get('/', (req, res) => {
  Article.find()
    .sort({ date: -1 })
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ message: 'No articles found' }));
});

// @route   POST api/articles/like:id
// @desc    Like article
// @access  Public
router.post('/like/:id', (req, res) => {
  console.log(req.params.id);

  Article.findById(req.params.id)
    .then(article => {
      // Increase liked count
      article.likes += 1;

      // Save
      article.save().then(article => res.json(article));
    })
    .catch(err => res.status(404).json({ message: 'No article found' }));
});

// @route   POST api/articles/unlike:id
// @desc    Unlike article
// @access  Public
router.post('/unlike/:id', (req, res) => {
  Article.findById(req.params.id)
    .then(article => {
      // Decrease liked count
      article.likes -= 1;

      // Save
      article.save().then(article => res.json(article));
    })
    .catch(err => res.status(404).json({ message: 'No article found' }));
});

module.exports = router;
