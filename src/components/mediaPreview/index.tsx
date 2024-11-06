import React from 'react';
import {Image, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';

interface AvatarProps {}

const MediaPreview: React.FC<AvatarProps> = ({}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
        }}
        style={styles.image}
      />
    </View>
  );
};

export default MediaPreview;
