import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  container: {
    padding: 16,
    borderBottomWidth: 8,
    borderBottomColor: '#F9FAFB',
  },

  commentInput: {borderTopWidth: 1, paddingTop: 10, borderTopColor: '#F9FAFB'},
}));
