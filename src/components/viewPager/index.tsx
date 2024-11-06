import React, {useEffect, useRef} from 'react';
import {FlatList, View, Text, Dimensions} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';
import Feed from '../feed';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '@/const/Navigation.enum';
import {
  AppStackParamList,
  TAppNavigation,
} from '@/navigation/AppNavigation/types';

interface TabButton {
  name: string;
}

interface Props {
  tab?: number;
  tabList: TabButton[];
  handleChangeTab: (index: number) => void;
}

const {width} = Dimensions.get('window');

const ViewPager: React.FC<Props> = ({tab, tabList, handleChangeTab}) => {
  const {styles} = useStyles(stylesheet);
  const flatListRef = useRef<FlatList>(null);
  const nav = useNavigation<TAppNavigation>();

  useEffect(() => {
    if (flatListRef.current && tab !== undefined) {
      flatListRef.current.scrollToIndex({index: tab, animated: true});
    }
  }, [tab]);

  const handleGoToDetailFeed = () => {
    nav.navigate(Screens.DetailFeed, {
      name: 'Bùi Bách Toàn',
      desc: 'ahhaha',
      avatar: '',
      media: [],
    });
  };

  const renderTabContent = (index: number) => {
    switch (index) {
      case 0:
        return (
          <View style={{}}>
            <Feed handleGoToDetail={handleGoToDetailFeed} />
            <Feed />
            <Feed />
            <Feed />
            <Feed />
            <Feed />
          </View>
        );
      case 1:
        return (
          <View>
            <Text>Content for Tab 1</Text>
          </View>
        );
      default:
        return (
          <View>
            <Text>Default Content</Text>
          </View>
        );
    }
  };

  const renderItem = ({item, index}: {item: TabButton; index: number}) => (
    <View
      style={{
        width: width,
        height: '100%',
        justifyContent: 'center',
      }}>
      {renderTabContent(index)}
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      horizontal={true}
      data={tabList}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      scrollEnabled={true}
      style={{height: tab == 0 ? '100%' : 500}}
    />
  );
};
export default ViewPager;
