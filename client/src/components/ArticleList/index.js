import React from 'react';
import Article from '../Article';

import './styles.scss';

const ArticleList = ({ data }) => {
  console.log(data);

  return (
    <div className="article-list__wrapper">
      {data.map((article, id) => (
        <Article key={id} data={article} />
      ))}
    </div>
  );
};

export default ArticleList;
