import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    gap: 10,
    marginTop: 8,
    paddingBottom: 8,
  },

  title: {
    fontWeight: 600,
    fontSize: 14,
  },

  titleButton: {
    fontWeight: 500,
    fontSize: 12,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputView: {
    flexDirection: 'row',
  },

  avatar: {
    width: 40,
    height: 40,
  },
}));
