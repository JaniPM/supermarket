/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeView from './views/home';
import CategoriesView from './views/categories';

const TabNavigator = createBottomTabNavigator({
  Home: HomeView,
  Categories: CategoriesView,
});

export default createAppContainer(TabNavigator);
