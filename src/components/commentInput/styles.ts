import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },

  avatar: {
    width: 32,
    height: 32,
  },

  input: {
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 75,
    flex: 2,
    backgroundColor: '#F9FAFB',
  },
}));
