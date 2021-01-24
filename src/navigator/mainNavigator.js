import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings195903Navigator from '../features/Settings195903/navigator';
import SignIn2195901Navigator from '../features/SignIn2195901/navigator';
import ArticleList195881Navigator from '../features/ArticleList195881/navigator';
import ArticleList195880Navigator from '../features/ArticleList195880/navigator';
import ArticleList195879Navigator from '../features/ArticleList195879/navigator';
import Settings195863Navigator from '../features/Settings195863/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings195903: { screen: Settings195903Navigator },
SignIn2195901: { screen: SignIn2195901Navigator },
ArticleList195881: { screen: ArticleList195881Navigator },
ArticleList195880: { screen: ArticleList195880Navigator },
ArticleList195879: { screen: ArticleList195879Navigator },
Settings195863: { screen: Settings195863Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
