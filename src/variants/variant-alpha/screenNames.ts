import VariantAplha from '.';
import BottomStack from '../../navigation/bottomStack';

const ScreenNames = {
  AlphaHome: 'AlphaHome',
  Home: 'Home',
  More: 'More',
  Settings: 'Settings',
  RootTab: 'RootTab',
};
const routeScreens = [
  {
    id: 1,
    component: VariantAplha,
    name: ScreenNames.AlphaHome,
  },
  {
    id: 2,
    component: VariantAplha,
    name: ScreenNames.Home,
  },
  {
    id: 3,
    component: VariantAplha,
    name: ScreenNames.More,
  },
  {
    id: 4,
    component: VariantAplha,
    name: ScreenNames.Settings,
  },
  {
    id: 4,
    component: BottomStack,
    name: ScreenNames.RootTab,
  },
];
export {ScreenNames as ScreenNamesAlpha, routeScreens as routeScreensAlpha};
