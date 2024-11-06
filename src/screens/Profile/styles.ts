import ListReel from '@/components/reelList';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listReel: {
    marginVertical: 8,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },

  pagerViewContainer: {},

  pagerView: {
    marginTop: 8,
    backgroundColor: '#fff',
    flex: 1,
  },

  page: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  pageText: {
    fontSize: 24,
    color: '#333',
  },
});
