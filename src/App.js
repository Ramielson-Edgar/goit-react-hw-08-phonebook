import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { authSelectors, authOperation } from './Redux';
import { routes } from './Route';
import PrivateRoute from './Component/PrivateRoute';
import PublicRoute from './Component/PublicRoute';
import Container from './Component/Container';
import Loader from './Component/loader';
import AppBar from './Component/Appbar';
import '../src/bases.css';

const HomePage = lazy(() =>
  import('./Views/HomePage' /* webpackChunkName: "Home-page" */),
);
const LoginViews = lazy(() =>
  import('./Views/LoginViews' /* webpackChunkName: "Login-Views" */),
);
const RegistredViews = lazy(() =>
  import('./Views/RegistredViews' /* webpackChunkName: "Registre-dViews" */),
);
const ContactsViews = lazy(() =>
  import('./Views/ContactsViews' /* webpackChunkName: "Contacts-Views" */),
);

class App extends Component {
  componentDidMount() {
    this.props.getCuurenUsers();
  }
  render() {
    return (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={null}>
            <Switch>
              <Route exact path={routes.home} component={HomePage} />
              <PublicRoute
                path={routes.login}
                restricted
                redirectTo={routes.contacts}
                component={LoginViews}
              />
              <PublicRoute
                path={routes.register}
                restricted
                redirectTo={routes.login}
                component={RegistredViews}
              />
              <PrivateRoute
                path={routes.contacts}
                redirectTo={routes.login}
                component={ContactsViews}
              />
            </Switch>
            {this.props.isLoading && <Loader />}
          </Suspense>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCuurenUsers: authOperation.currentUser,
};

const mapStateToProps = state => ({
  isLoading: authSelectors.loading(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
