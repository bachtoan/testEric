import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  container: (top, bottom) => ({
    flex: 1,
    paddingTop: top,
    paddingBottom: bottom,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  }),

  contentView: {
    paddingTop: 10,
    paddingHorizontal: 16,
  },

  commentView: {
    borderTopWidth: 1,
    borderTopColor: '#F9FAFB',
    padding: 10,
  },
}));
