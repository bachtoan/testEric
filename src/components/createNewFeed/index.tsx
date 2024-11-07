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

const CreateNewFeed: React.FC<AvatarProps> = ({avatar}) => {
  const {styles} = useStyles(stylesheet);

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
        <ButtonApp
          title="Phát trực tiếp"
          icon={<Svg.Camera />}
          type="border"
          titleStyle={styles.titleButton}
          onPress={() => {}}
        />
        <ButtonApp
          title="Vị trí"
          icon={<Svg.Location2 />}
          type="border"
          titleStyle={styles.titleButton}
          onPress={() => {}}
        />
        <ButtonApp
          title="Kết bạn"
          icon={<Svg.AddFriend />}
          type="border"
          titleStyle={styles.titleButton}
          onPress={() => {}}
        />
        <ButtonApp
          title="Khác"
          icon={<Svg.Smile_elipse />}
          type="border"
          titleStyle={styles.titleButton}
          onPress={() => {}}
        />
        <ButtonApp
          title="Khác"
          icon={<Svg.VerifiedBadge />}
          type="border"
          titleStyle={styles.titleButton}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default CreateNewFeed;
