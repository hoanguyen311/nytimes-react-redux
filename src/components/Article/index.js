import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Skeleton, Icon } from 'antd';
import './index.css';

class Article extends Component {
  static propTypes = {
    id: PropTypes.string,
    item: PropTypes.shape({
      snippet: PropTypes.string,
      source: PropTypes.string,
      pub_date: PropTypes.string,
      headline: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.string,
      multimedia: PropTypes.arrayOf(PropTypes.shape({
        caption: PropTypes.string,
        url: PropTypes.string
      })),
    })
  };

  static defaultProps = {
    id: null,
    item: null
  };

  componentDidMount() {
    this.scrollToTop();
  }

  scrollToTop() {
    window && window.scroll && window.scroll(0, 0);
  }

  render() {
    const { item } = this.props;

    if (!item) {
      return (
        <Skeleton active loading paragraph={{ rows: 10 }} />
      )
    }

    const  { image, headline, snippet, formattedDate, source, web_url } = item;

    return (
      <article className="article">
        <header className="article-header">
          <Link className="article-back-button" to="/"><Icon type="arrow-left" theme="outlined" /> Back</Link>
          <h2 className="article-headline">{headline}</h2>
          {source && <h3 className="article-source">Source: {source}</h3>}
          {formattedDate && <small className="article-pub-date">{formattedDate}</small>}
        </header>
        <div className="article-carousel">
          {image && <img src={image} alt={headline} className="article-image" />}
        </div>
        <p className="article-content">{snippet}</p>
        <a target="_blank" rel="noopener noreferrer" href={web_url} title={headline}>Read more...</a>
      </article>
    )
  }
}

export default Article;
