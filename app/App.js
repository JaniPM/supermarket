/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { ThemeProvider } from 'styled-components';
import mainTheme from './theme';
import HomeView from './views/home';
import CategoriesView from './views/categories';

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeView },
  Categories: { screen: CategoriesView },
});

const AppContainer = createAppContainer(TabNavigator);

const client = new ApolloClient({ uri: 'http://localhost:1337/graphql' });

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={mainTheme}>
      <AppContainer />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
