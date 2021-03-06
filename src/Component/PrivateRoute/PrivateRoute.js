import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../Redux';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
