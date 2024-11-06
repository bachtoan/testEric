import React, {ReactNode } from 'react';
import { View, TouchableOpacity, Text, StyleProp, ViewProps, ViewStyle } from 'react-native';
import {stylesheet} from './styles';
import { useStyles } from 'react-native-unistyles';


interface AvatarProps {
    title: string;
    icon?: ReactNode;
    onPress: () => void;
    style?: ViewStyle;
    type?: "default" | "border";
    colorStyle?: 'default' | "highlight";
}
enum ButtonState {
    'default', 'border', 'highlight'
}
const ButtonApp: React.FC<AvatarProps> = ({
    title,
    icon,
    type = 'default',
    colorStyle = 'default',
    style,
    onPress,
}) => {
    const {styles} = useStyles(stylesheet)
    return (
    <View style={[styles.container,style]}>
        <TouchableOpacity onPress={onPress} style={styles.button(type,colorStyle)}>
            {icon}
            <Text style = {styles.text(colorStyle)}>{title}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ButtonApp;