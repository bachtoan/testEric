import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';
import FeedHeader from '../feedHeader';
import MediaPreview from '../mediaPreview';
import CommentInput from '../commentInput';
import FeedBehavior from '../behavior';

interface AvatarProps {
  name: string;
  desc?: string;
  avatar?: string;
  media?: string[];
  handleGoToDetail: () => void;
}

const Feed: React.FC<AvatarProps> = ({
  name,
  desc,
  avatar,
  media,
  handleGoToDetail,
}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoToDetail} activeOpacity={1}>
        <FeedHeader
          name={name}
          desc={desc}
          avatar={avatar}
          time="2 giờ"
          content="Dân ca Quan họ là một trong những làn điệu dân ca tiêu biểu của vùng châu thổ sông Hồng ở miền Bắc Việt Nam."
        />
        <MediaPreview imageUrl={media} />
      </TouchableOpacity>
      <FeedBehavior like={11} />
      <View style={styles.commentInput}>
        <CommentInput />
      </View>
    </View>
  );
};

export default Feed;
