import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  container: {},

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonBack: {
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  avatar: {width: 50, height: 50},

  name: {
    fontWeight: 500,
    fontSize: 18,
  },

  desc: {
    fontWeight: 400,
    fontSize: 12,
    color: '#A3A3A3',
  },

  content: {
    marginBottom: 8,
  },
}));
