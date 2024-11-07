import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },

  add: {flexDirection: 'row', alignItems: 'center'},

  title: {
    fontSize: 14,
    fontWeight: 500,
  },

  desc: {
    fontSize: 12,
    fontWeight: 400,
  },

  behavior: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    gap: 10,
  },

  addTitle: {
    flex: 5,
    fontSize: 14,
    fontWeight: 500,
    color: '#3864FF',
  },
}));
