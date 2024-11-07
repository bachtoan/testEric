import React from 'react';
import {Image, Text, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';
import InfoCard from '../infoCard';
import {Svg} from '@/assets/icons';

interface AvatarProps {
  imageUrl?: string;
  view?: number;
}

const InfoTab: React.FC<AvatarProps> = ({imageUrl, view}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.tab2Container}>
      <View style={{flex: 1}}>
        <Text style={styles.text}>Thông tin cơ bản</Text>
        <InfoCard icon={<Svg.DefaultAvatar />} title="Nam" desc="Giới tính" />
        <InfoCard
          icon={<Svg.DateOfBirth />}
          title="22 tháng 2, 2002"
          desc="Ngày sinh"
        />
        <InfoCard icon={<Svg.Localize />} title="Tiếng Việt" desc="Giới tính" />

        <Text style={[styles.text, {marginTop: 40}]}>Nơi từng sống</Text>
        <InfoCard icon={<Svg.Location />} title="Hải Dương" desc="Quê quán" />
        <InfoCard
          icon={<Svg.Location />}
          title="Hà Nội"
          desc="Nơi ở hiện tại"
        />
        <InfoCard type="add" />
      </View>
    </View>
  );
};

export default InfoTab;
