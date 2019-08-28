import React, { Component } from 'react';
import axios from 'axios';

import { ArticleList } from '../components';
import './App.scss';

class App extends Component {
  state = {
    articles: [],
    loading: true
  };

  componentDidMount() {
    const API_URL = 'http://localhost:5000/api/articles';
    axios
      .get(`${API_URL}`)
      .then(res => {
        this.setState({
          articles: res.data,
          loading: false
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { articles, loading } = this.state;

    return (
      <div className="App">
        {loading ? <div>Loading...</div> : <ArticleList data={articles} />}
      </div>
    );
  }
}

export default App;
