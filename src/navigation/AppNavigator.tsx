import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {VARIANT} from '@env';
// Import client-specific screens
import {ScreenNames, routeScreensAlpha, routeScreensBeta} from './screenNames';

const CLIENT = true ? 'alpha' : 'beta';

const getScreens = () => {
  switch (CLIENT) {
    case 'alpha':
      return routeScreensAlpha;
    case 'beta':
      return routeScreensBeta;
    default:
      throw new Error(`Unknown client: ${VARIANT}`);
  }
};

const AppNavigator = () => {
  const Screens: any = getScreens();

  console.log('VARIANT', VARIANT);
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={ScreenNames.RootTab}>
      {Screens.map((screen: any) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{headerShown: screen.headerShown || false}}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigator;
