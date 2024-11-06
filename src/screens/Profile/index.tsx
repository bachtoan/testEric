import React, {useEffect, useRef, useState} from 'react';
import {FlatList, ScrollView, ScrollViewBase, Text, View} from 'react-native';
import PagerView from 'react-native-pager-view';

import {styles} from './styles';
import ProfileHeader from './component/header';
import ListReel from '@/components/reelList';
import {TabBar} from '@/components/tabbar';
import Feed from '@/components/feed';
import ViewPager from '@/components/viewPager';

const tabList = [
  {key: 0, name: 'Bài viết'},
  {key: 1, name: 'Giới thiệu'},
  {key: 2, name: 'Bạn bè'},
  {key: 3, name: 'Ảnh'},
  {key: 4, name: 'Video'},
  {key: 5, name: 'Cửa hàng'},
  {key: 6, name: 'Khác'},
];

const arr = Array.from({length: 200}, (_, i) => (i + 1).toString());

const feedList = [
  {
    name: 'Bài viết 1',
    avatar:
      'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/09/18/457/avatar-mac-dinh-7.jpg',
    media: [
      {
        src: 'https://meatworld.com.vn/wp-content/uploads/anh-avatar-anime-2-1.jpg',
        type: 'image',
      },
    ],
  },
  {
    name: 'Bài viết 2',
    avatar:
      'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/09/18/457/avatar-mac-dinh-7.jpg',
    media: [
      {
        src: 'https://meatworld.com.vn/wp-content/uploads/anh-avatar-anime-2-1.jpg',
        type: 'image',
      },
    ],
  },
  {
    name: 'Bài viết 3',
    avatar:
      'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/09/18/457/avatar-mac-dinh-7.jpg',
    media: [
      {
        src: 'https://meatworld.com.vn/wp-content/uploads/anh-avatar-anime-2-1.jpg',
        type: 'image',
      },
    ],
  },
];

export function Profile() {
  const pagerViewRef = useRef<PagerView>(null);
  const [viewingList, setViewingList] = useState<number>();

  const handleChangeTab = (index: number) => {
    console.log('set: ', index);

    setViewingList(index);
  };

  useEffect(() => {
    pagerViewRef.current?.setPage(viewingList);
  }, [viewingList]);

  return (
    <ScrollView
      style={{flex: 1}}
      stickyHeaderIndices={[2]}
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
      showsVerticalScrollIndicator={false}
      bounces={false}
      bouncesZoom={false}>
      <ProfileHeader
        name="Bùi Bách Toàn"
        desc="toanbui765@gmail.com"
        verifiedBadge={true}
      />

      <View style={styles.listReel}>
        <ListReel />
      </View>

      <TabBar
        tabList={tabList}
        onChangeTab={handleChangeTab}
        initialTab={viewingList}
      />

      <ViewPager
        tabList={tabList}
        tab={viewingList}
        handleChangeTab={handleChangeTab}
      />
    </ScrollView>
  );
}
