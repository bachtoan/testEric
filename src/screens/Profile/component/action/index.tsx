import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';
import {styles} from './styles';
import ButtonApp from '@/components/button';
import {Svg} from '@/assets/icons';

interface AvatarProps {
  style?: ViewStyle;
}

const Action: React.FC<AvatarProps> = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <ButtonApp
        title="Thêm tin"
        icon={<Svg.Plus />}
        onPress={() => {}}
        type="default"
        colorStyle="highlight"
        style={{flex: 1}}
      />
      <ButtonApp
        style={{flex: 2}}
        title="Chỉnh sửa trang cá nhân"
        onPress={() => {}}
        type="default"
        colorStyle="default"
      />
    </View>
  );
};

export default Action;
