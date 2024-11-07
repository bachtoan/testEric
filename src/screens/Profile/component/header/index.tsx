import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {styles} from './styles';
import Avatar from '@/components/avatar';
import Title from '@/components/profileTitle';
import Action from '../action';

interface AvatarProps {
  name: string;
  desc: string;
  verifiedBadge: boolean;
}

const ProfileHeader: React.FC<AvatarProps> = ({
  name,
  desc,
  verifiedBadge = true,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',
        }}
        style={styles.coverImage}>
        <Avatar style={styles.avatar} imageUrl="" hasBorder={false} />
      </ImageBackground>
      <Title
        name={name}
        desc={desc}
        verifiedBadge={verifiedBadge}
        friend={100}
        folowing={300}
      />
      <Action style={{marginTop: 20}} />
    </View>
  );
};

export default ProfileHeader;
