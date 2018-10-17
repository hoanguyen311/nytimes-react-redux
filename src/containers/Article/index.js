import { connect } from 'react-redux';
import Article from '@components/Article';

const mapStateToProps = (state, ownProps) => ({
  item: state.newsList.byId[ownProps.id]
});

export default connect(mapStateToProps)(Article);
