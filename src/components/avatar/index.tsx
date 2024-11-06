import React from 'react';
import {
  Image,
  View,
  StyleProp,
  ImageProps,
  Text,
  ImageBackground,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {stylesheet} from './styles';
import {Svg} from '@/assets/icons';

interface AvatarProps {
  imageUrl?: string;
  style?: ViewStyle;
  hasBorder?: boolean;
  count?: number;
  disable?: boolean;
  desc?: string;
  isAddReel?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  style,
  desc,
  isAddReel = false,
  hasBorder = false,
  count = 0,
  disable = true,
}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={style}>
      <TouchableOpacity
        style={[styles.avatarView(hasBorder, isAddReel)]}
        disabled={disable}>
        {isAddReel ? (
          <View style={styles.addReel}>
            <View style={styles.plus}>
              <Svg.Plus width={24} height={24} />
            </View>
          </View>
        ) : (
          <ImageBackground
            source={{
              uri:
                imageUrl ||
                'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
            }}
            style={styles.avatar(count)}
            imageStyle={{borderRadius: 75}}>
            {count > 0 ? <Text style={styles.count}>{`+${count}`}</Text> : null}
          </ImageBackground>
        )}
      </TouchableOpacity>
      {!!desc ? <Text style={styles.desc}>{desc}</Text> : null}
    </View>
  );
};

export default Avatar;
