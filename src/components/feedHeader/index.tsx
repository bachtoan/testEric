import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';
import Avatar from '../avatar';
import {Svg} from '@/assets/icons';

interface Props {
  name: string;
  desc: string;
  time: string;
  content?: string;
  avatar: string;
  showArrowBack?: boolean;
  onPressback: () => void;
}

const FeedHeader: React.FC<Props> = ({
  name,
  desc,
  time,
  content,
  showArrowBack,
  onPressback,
  avatar,
}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          {showArrowBack ? (
            <TouchableOpacity onPress={onPressback} style={styles.buttonBack}>
              <Svg.ArrowLeft />
            </TouchableOpacity>
          ) : null}
          <Avatar style={styles.avatar} imageUrl={avatar} />
          <View>
            <View style={styles.nameView}>
              <Text style={styles.name}>{name}</Text>
              <Svg.VerifiedBadge />
            </View>
            <View style={styles.row}>
              <Text style={styles.desc}>{`@${name}`}</Text>
              <View style={{paddingHorizontal: 3}}>
                <Svg.Dot />
              </View>
              <Text style={styles.desc}>{time}</Text>
            </View>
          </View>
        </View>
        <Svg.Option />
      </View>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default FeedHeader;
