import React from 'react';
import {Image, Text, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';

interface AvatarProps {
  imageUrl?: string;
  view?: number;
}

const MediaPreview: React.FC<AvatarProps> = ({imageUrl, view}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            imageUrl ||
            'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
        }}
        style={styles.image}
      />
      {view ? (
        <Text
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: '#71717A',
          }}>{`${view} lượt xem`}</Text>
      ) : null}
    </View>
  );
};

export default MediaPreview;
