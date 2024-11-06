import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';
import FeedHeader from '../feedHeader';
import MediaPreview from '../mediaPreview';
import CommentInput from '../commentInput';

interface AvatarProps {
  name: string;
  desc: string;
  avatar: string;
  media: string[];
  handleGoToDetail: () => void;
}

const Feed: React.FC<AvatarProps> = ({handleGoToDetail}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={handleGoToDetail}>
        <FeedHeader name="Bùi Bách Toàn" desc="hahaha" avatar="" />
        <MediaPreview />
      </TouchableOpacity>
      <CommentInput />
    </View>
  );
};

export default Feed;
