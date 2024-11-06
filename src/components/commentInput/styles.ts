import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  container: {
    flexDirection: 'row',
    height: 100,
  },

  avatar: {
    width: 50,
    height: 50,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 4,
    flex: 2,
  },
}));
