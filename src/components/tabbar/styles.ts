import {createStyleSheet} from 'react-native-unistyles';

export const styleSheet = createStyleSheet(theme => ({
  container: {
    padding: 4,
    gap: 8,
    borderRadius: 8,
    backgroundColor: '#ffff',
    paddingHorizontal: 16,
  },

  button: isFocus => ({
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    flex: 1,
    flexDirection: 'row',
    marginRight: 10,
  }),

  buttonText: isFocus => ({
    fontSize: 14,
    fontWeight: 500,
  }),
}));
