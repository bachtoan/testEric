import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Svg} from '@/assets/icons';

interface AvatarProps {
  name: string;
  desc: string;
  verifiedBadge: boolean;
  friend: number;
  folowing: number;
}

const Title: React.FC<AvatarProps> = ({
  name,
  desc,
  verifiedBadge = true,
  friend = 100,
  folowing = 200,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameView}>
        <Text style={styles.name}>{name}</Text>
        {verifiedBadge ? <Svg.VerifiedBadge /> : null}
      </View>
      <Text style={styles.desc}>{desc}</Text>
      <View style={styles.otherView}>
        <View style={styles.otherItem}>
          <Text style={styles.otherData}>{`${friend + 'K'} `}</Text>
          <Text>Bạn bè</Text>
        </View>
        <View style={styles.otherItem}>
          <Text style={styles.otherData}>{`${folowing + 'K'} `}</Text>
          <Text>Người theo dõi</Text>
        </View>
      </View>
    </View>
  );
};

export default Title;
