import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';
import {Svg} from '@/assets/icons';

interface AvatarProps {
  like: number;
}

const FeedBehavior: React.FC<AvatarProps> = ({like}) => {
  const {styles} = useStyles(stylesheet);
  const [isLiked, setIsLiked] = useState<boolean>();

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLike}>
        <Svg.Heart
          fill={isLiked ? 'red' : 'none'}
          stroke={isLiked ? 'red' : '#4D5761'}
        />
        {like > 0 ? <Text>{`${like}K`}</Text> : null}
      </TouchableOpacity>
    </View>
  );
};

export default FeedBehavior;
