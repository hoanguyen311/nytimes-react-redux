import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Skeleton } from 'antd';
import './index.css';

class NewsList extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    dataSource: PropTypes.arrayOf(PropTypes.shape({
      snippet: PropTypes.string,
      source: PropTypes.string,
      pub_date: PropTypes.string,
      headline: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.string,
    }))
  };

  static defaultProps = {
    loading: false,
    dataSource: []
  };

  renderKeywords = (keywords = []) => {
    if (!keywords) {
      return null;
    }

    return keywords.map((keyword, i) => (
      <span className="news-badge" key={i} >{keyword.value}</span>
    ));
  }

  renderItem = (item) => {
    const { loading } = this.props;
    const { headline, image, keywords, snippet, id, source } = item;
    const articleLink = `/article/${id}`;
    let previewImage = null;

    if (!loading && image) {
      previewImage = <Link to={articleLink}><img className="news-image" src={image} alt={headline} /></Link>;
    }

    return (
      <List.Item
        key={id}
        extra={previewImage}
      >
        <List.Item.Meta
          title={<Link to={articleLink}>{headline}</Link>}
          description={source}
        />
        {snippet}
        <div className="news-keywords">
          {this.renderKeywords(keywords)}
        </div>
      </List.Item>
    );
  }


  render() {
    const { dataSource, loading } = this.props;

    if (loading) {
      return (
        <List
          size="large"
          itemLayout="vertical"
          dataSource={Array(10)}
          renderItem={(i) => (
            <List.Item>
              <Skeleton key={i} active loading rows={5} />
            </List.Item>
          )}
        />
      );
    }

    return (
      <List
        className="news-list"
        pagination={{
          pageSize: 5
        }}
        size="large"
        itemLayout="vertical"
        dataSource={dataSource}
        renderItem={this.renderItem}
      />
    );
  }
}

export default NewsList;
