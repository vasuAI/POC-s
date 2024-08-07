import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textStyle: {
    fontSize: 12,
    textAlign: 'center',
  },
  iconStyle: {
    height: 24,
    width: 24,
  },
  con: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0, // for Android
    shadowOffset: {
      width: 0,
      height: 0, // for iOS
    },
    borderColor: 'transparent',
    height: 54,
    paddingBottom: 5,
  },
  tabBarLabelStyle: {
    letterSpacing: 0,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 20,
  },
});
