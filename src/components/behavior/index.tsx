import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';
import {Svg} from '@/assets/icons';

interface AvatarProps {
  like: number;
}

const FeedBehavior: React.FC<AvatarProps> = ({like}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Svg.Heart />
        {like > 0 ? <Text>{`${like}K`}</Text> : null}
      </TouchableOpacity>
    </View>
  );
};

export default FeedBehavior;
