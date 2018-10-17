import { connect } from 'react-redux';
import NewsList from '@components/NewsList';
import { getAll } from './reducer';

const mapStateToProps = (state) => ({
  loading: state.app.loading,
  dataSource: getAll(state.newsList)
});

export default connect(mapStateToProps)(NewsList);
