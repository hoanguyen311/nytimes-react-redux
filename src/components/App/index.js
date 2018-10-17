import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewsList from '@containers/NewsList';
import Article from '@containers/Article';
import logo from './nytlogo.png';
import './index.css';

const { Header, Content } = Layout;

class App extends Component {
  static propTypes = {
    fetchData: PropTypes.func,
  };

  static defaultProps = {
    fetchData: null,
  };

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData && fetchData();
  }

  render() {
    return (
      <Router>
        <Layout>
          <Header className="app-header">
            <h1 className="app-headline">
              <Link to="/">
                <img src={logo} alt="The New York Times" className="app-logo" />
              </Link>
            </h1>
          </Header>
            <Content className="app-content">
              <Route exact path="/" component={NewsList} />
              <Route exact path="/article/:id" render={({match}) => <Article id={match.params.id} />} />
            </Content>
        </Layout>
      </Router>
    );
  }
}

export default App;
