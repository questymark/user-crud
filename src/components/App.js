import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    const {children, loading} = this.props;
    return (
      <div>
        <div className={loading ? "loader" : "loader none"}>
          <span className="loader__text">Загрузка...</span>
        </div>
        <div className="container">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
