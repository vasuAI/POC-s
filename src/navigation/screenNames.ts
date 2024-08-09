import Home from '../module/home';
import More from '../module/More';
import BottomStack from './bottomStack';
import DrawerStack from './drawerStack';
import Settings from '../module/Settings';

const ScreenNames = {
  AlphaHome: 'AlphaHome',
  Home: 'Home',
  More: 'More',
  Settings: 'Settings',
  RootTab: 'RootTab',
};

const commonScreens = [
  {
    id: 1,
    component: Home,
    name: ScreenNames.Home,
  },
  {
    id: 2,
    component: More,
    name: ScreenNames.More,
  },
  {
    id: 3,
    component: Settings,
    name: ScreenNames.Settings,
  },
];
const routeScreensAlpha = [
  ...commonScreens,
  {
    id: 4,
    component: BottomStack,
    name: ScreenNames.RootTab,
  },
];

const routeScreensBeta = [
  ...commonScreens,
  {
    id: 4,
    component: DrawerStack,
    name: ScreenNames.RootTab,
  },
];
export {ScreenNames, routeScreensAlpha, routeScreensBeta};
