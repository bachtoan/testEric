import React, {useCallback, useEffect, useRef} from 'react';
import {
  FlatList,
  View,
  Text,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Feed from '../feed';
import {Screens} from '@/const/Navigation.enum';
import {TAppNavigation} from '@/navigation/AppNavigation/types';
import CreateNewFeed from '../createNewFeed';
import InfoTab from '../infoTab';
import {useStyles} from 'react-native-unistyles';
import {stylesheet} from './styles';

interface TabButton {
  name: string;
}

interface Props {
  tab?: number;
  tabList: TabButton[];
  feedList: any[];
  handleChangeTab: (index: number) => void;
}

const {width, height} = Dimensions.get('window');

const ViewPager: React.FC<Props> = ({tab, tabList, feedList}) => {
  const {styles} = useStyles(stylesheet);

  const flatListRef = useRef<FlatList>(null);
  const nav = useNavigation<TAppNavigation>();

  const handleGoToDetailFeed = (
    name: string,
    desc: string,
    avatar: string,
    media: string,
  ) => {
    nav.navigate(Screens.DetailFeed, {
      name: name,
      desc: desc,
      avatar: avatar,
      media: media,
    });
  };

  useEffect(() => {
    if (tab == undefined || tab < 0) {
      return;
    }
    if (flatListRef.current && tab !== undefined) {
      flatListRef.current.scrollToIndex({index: tab, animated: true});
    }
  }, [tab]);

  const renderTabContent = (index: number) => {
    switch (index) {
      case 0:
        return (
          <View>
            <CreateNewFeed avatar="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" />
            <View style={styles.newFeedView}>
              {feedList?.map(item => {
                return (
                  <Feed
                    handleGoToDetail={() => {
                      handleGoToDetailFeed(
                        item.name,
                        item.name,
                        item.avatar,
                        item.media,
                      );
                    }}
                    name={item.name}
                    avatar={item.avatar}
                    media={item.media}
                  />
                );
              })}
            </View>
          </View>
        );
      case 1:
        return <InfoTab />;
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
      key={index.toString()}
      style={{
        width: width,
        height: '100%',
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
      keyExtractor={index => index.toString()}
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      scrollEnabled={false}
      pagingEnabled={true}
      decelerationRate="fast"
      removeClippedSubviews={true}
      initialNumToRender={2}
      maxToRenderPerBatch={1}
      windowSize={width}
      style={{
        height: tab == 0 ? '100%' : height - 40,
      }}
    />
  );
};
export default ViewPager;
