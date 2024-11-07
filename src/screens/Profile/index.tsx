import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import {useInfiniteQuery} from '@tanstack/react-query';

import {styles} from './styles';
import ProfileHeader from './component/header';
import ListReel from '@/components/reelList';
import {TabBar} from '@/components/tabbar';
import ViewPager from '@/components/viewPager';
import {getDataProfile} from '@/controllers/Profile';

const tabList = [
  {key: 0, name: 'Bài viết'},
  {key: 1, name: 'Giới thiệu'},
  {key: 2, name: 'Bạn bè'},
  {key: 3, name: 'Ảnh'},
  {key: 4, name: 'Video'},
  {key: 5, name: 'Cửa hàng'},
  {key: 6, name: 'Khác'},
];

export function Profile() {
  const pagerViewRef = useRef<PagerView>(null);
  const [viewingList, setViewingList] = useState<number>();
  const [dataFeed, setDataFeed] = useState<any>();

  const handleChangeTab = (index: number) => {
    setViewingList(index);
  };

  const callData = async (pageParam: any) => {
    const data = await getDataProfile();
    const dataValidated = data.data.results.slice(0, 10).map(item => {
      return {
        name: item.name,
        avatar: item.image,
        media: item.image,
      };
    });
    setDataFeed(dataValidated);
    return dataValidated;
  };

  const {isLoading, isFetching, fetchNextPage} = useInfiniteQuery({
    queryKey: [],
    queryFn: ({pageParam = {}}: any) => {
      callData(pageParam);
    },
    initialPageParam: undefined,
    getNextPageParam: (_, allPage = []) => {},
    getPreviousPageParam: (firstPage = []) => ({}),
  });

  useEffect(() => {
    pagerViewRef.current?.setPage(viewingList);
  }, [viewingList]);

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#F9FAFB'}}
      stickyHeaderIndices={[2]}
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
      showsVerticalScrollIndicator={false}
      collapsable
      collapsableChildren
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

      {!isFetching || !isLoading ? (
        <ViewPager
          tabList={tabList}
          tab={viewingList}
          handleChangeTab={handleChangeTab}
          feedList={dataFeed}
        />
      ) : null}
    </ScrollView>
  );
}
