import React, {ReactNode} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';
import {Svg} from '@/assets/icons';

interface AvatarProps {
  icon?: ReactNode;
  title?: string;
  desc?: string;
  type?: 'default' | 'add';
  onPress?: () => void;
}

const InfoCard: React.FC<AvatarProps> = ({
  icon,
  title,
  desc,
  type = 'default',
  onPress,
}) => {
  const {styles} = useStyles(stylesheet);

  if (type == 'add') {
    return (
      <TouchableOpacity style={styles.add}>
        <View style={{flex: 1}}>
          <Svg.Add />
        </View>
        <Text style={styles.addTitle}>Thêm tỉnh/Thành phố</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{flex: 1}}>{icon}</View>
      <View style={{flex: 4}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <View style={styles.behavior}>
        <Svg.Earth />
        <Svg.Pencil />
      </View>
    </TouchableOpacity>
  );
};

export default InfoCard;
