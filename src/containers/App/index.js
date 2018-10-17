import { connect } from 'react-redux';
import App from '@components/App';
import { fetchNewsData as fetchData } from './actions';

const mapDispatchToProps = {
  fetchData
};

const mapStateToProps = (state) => ({
  loading: state.app.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
