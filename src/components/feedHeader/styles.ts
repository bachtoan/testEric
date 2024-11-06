import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  container: {},

  header: {
    flexDirection: 'row',
  },

  avatar: {width: 50, height: 50},

  name: {
    fontWeight: 400,
    fontSize: 18,
  },
}));
