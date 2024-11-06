import CommentInput from '@/components/commentInput';
import FeedHeader from '@/components/feedHeader';
import MediaPreview from '@/components/mediaPreview';
import {Screens} from '@/const/Navigation.enum';
import {TAppRoute} from '@/navigation/AppNavigation/types';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

export function DetailFeed() {
  const {name, desc, avatar, media} =
    useRoute<TAppRoute<Screens.DetailFeed>>().params ?? {};

  console.log({name});

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <FeedHeader name="Bùi Bách Toàn" desc="hahaha" avatar="" />
        <MediaPreview />
      </View>
      <CommentInput />
    </View>
  );
}
