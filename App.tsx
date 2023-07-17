import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
// import Toast from 'react-native-toast-message';

import Toast from 'react-native-toast-message';
import client from './src/apollo-client';
import { Navigator } from './src/components/navigator/Navigator';
import { store } from './src/store';
import { AppTheme } from './src/theme/Theme';

const App = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Navigator />
          <Toast />
        </ApolloProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
