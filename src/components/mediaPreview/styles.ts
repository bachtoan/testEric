import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  container: {
    height: 400,
  },

  image: {
    flex: 1,
    borderRadius: 10,
  },
}));
