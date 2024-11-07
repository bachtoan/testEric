import React from 'react';
import {FlatList, ScrollView, Text, TextInput, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';
import {Svg} from '@/assets/icons';
import ButtonApp from '../button';
import Avatar from '../avatar';

interface AvatarProps {
  avatar: string;
}

const listButton = [
  {
    title: 'Phát trực tiếp',
    icon: <Svg.Camera />,
  },
  {
    title: 'Vị trí',
    icon: <Svg.Location2 />,
  },
  {
    title: 'Kết bạn',
    icon: <Svg.AddFriend />,
  },
  {
    title: 'Khác',
    icon: <Svg.AddFriend />,
  },
];

const CreateNewFeed: React.FC<AvatarProps> = ({avatar}) => {
  const {styles} = useStyles(stylesheet);

  const onPress = (title: string) => {
    console.warn('Press ', title);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bài viết của bạn</Text>
      <View style={styles.content}>
        <View style={styles.inputView}>
          <Avatar imageUrl={avatar} style={styles.avatar} />
          <TextInput placeholder="Bạn đang nghĩ gì?" editable={false} />
        </View>
        <Svg.Image />
      </View>
      <View style={[styles.inputView, {flex: 1, overflow: 'hidden'}]}>
        {listButton.map(item => {
          return (
            <ButtonApp
              title={item.title}
              icon={item.icon}
              type="border"
              titleStyle={styles.titleButton}
              onPress={() => onPress(item.title)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default CreateNewFeed;
