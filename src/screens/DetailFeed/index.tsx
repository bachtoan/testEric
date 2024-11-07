import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TAppNavigation, TAppRoute} from '@/navigation/AppNavigation/types';

import CommentInput from '@/components/commentInput';
import FeedHeader from '@/components/feedHeader';
import MediaPreview from '@/components/mediaPreview';
import {Screens} from '@/const/Navigation.enum';
import FeedBehavior from '@/components/behavior';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function DetailFeed() {
  const {name, desc, avatar, media} =
    useRoute<TAppRoute<Screens.DetailFeed>>().params ?? {};
  const {bottom, top} = useSafeAreaInsets();
  const nav = useNavigation<TAppNavigation>();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: top,
        paddingBottom: bottom,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
      }}>
      <View style={{paddingTop: 10, paddingHorizontal: 16}}>
        <FeedHeader
          name={name}
          desc={name}
          avatar={avatar}
          time="2hr"
          showArrowBack={true}
          onPressback={() => {
            nav.goBack();
          }}
        />
        <MediaPreview view={22} imageUrl={avatar} />
        <FeedBehavior like={11} />
      </View>
      <View style={{}}>
        <CommentInput />
      </View>
    </View>
  );
}
