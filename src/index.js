import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { Home } from './screens';
import store from './store';

export default () => (
  <Provider store={store}>
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Home} />
      </Switch>
    </NativeRouter>
  </Provider>
);
