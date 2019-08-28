import React, { Component } from 'react';
import axios from 'axios';

import './styles.scss';

const BASE_URL = 'http://localhost:5000/api/articles';

class Article extends Component {
  state = {
    article: this.props.data
  };

  handleLike = id => {
    axios
      .post(`${BASE_URL}/like/${id}`)
      .then(res => {
        this.setState({ article: res.data });
      })
      .catch(err => console.error(err));
  };

  handleUnlike = id => {
    axios
      .post(`${BASE_URL}/unlike/${id}`)
      .then(res => {
        this.setState({ article: res.data });
      })
      .catch(err => console.error(err));
  };

  render() {
    const { article } = this.state;

    return (
      <div className="article__wrapper">
        <h1>{article && article.title}</h1>
        <p>{article && article.text}</p>
        <p>likes: {article && article.likes}</p>
        <button onClick={() => this.handleLike(article._id)}>Like</button>
        <button onClick={() => this.handleUnlike(article._id)}>Unlike</button>
      </div>
    );
  }
}

export default Article;
