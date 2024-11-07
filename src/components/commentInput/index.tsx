import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';
import Avatar from '../avatar';
import {Svg} from '@/assets/icons';

interface Props {}

const CommentInput: React.FC<Props> = ({}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Avatar
        imageUrl="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
        style={styles.avatar}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập bình luận"
        value={''}
        onChangeText={() => {}}
        editable={false}
      />
      <Svg.Icon width={40} height={40} />
      <Svg.Image2 width={40} height={40} />
    </View>
  );
};

export default CommentInput;
