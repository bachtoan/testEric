import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';
import Avatar from '../avatar';

interface Props {}

const CommentInput: React.FC<Props> = ({}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Avatar
        imageUrl="https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/09/18/457/avatar-mac-dinh-7.jpg"
        style={styles.avatar}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập nội dung ở đây"
        value={''}
        onChangeText={() => {}}
        editable={false}
      />
    </View>
  );
};

export default CommentInput;
