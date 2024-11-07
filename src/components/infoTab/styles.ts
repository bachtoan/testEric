import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
  },

  tab2Container: {marginTop: 8, padding: 16, flex: 1},

  text: {
    fontSize: 14,
    fontWeight: 500,
  },
}));
