import React from 'react';
import { Image, View, StyleProp, ImageProps, Text, ImageBackground, FlatList, ViewStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import Avatar from '../avatar';

enum reelType {
    add,
    reel,
} 

const listReel = [
    {
        name: 'Thêm tin',
        avatar: '',
        type: reelType.add
    },
    {
        name: 'a',
        avatar: 'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',
        type: reelType.reel
    },
    {
        name: 'b',
        avatar: 'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',
        type: reelType.reel
    },
    {
        name: 'c',
        avatar: 'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',
        type: reelType.reel
    },
    {
        name: 'd',
        avatar: 'https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg',
        type: reelType.reel
    },
    {
        name: 'd',
        avatar: 'https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg',
        type: reelType.reel
    },
    {
        name: 'd',
        avatar: 'https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg',
        type: reelType.reel
    },
    {
        name: 'd',
        avatar: 'https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg',
        type: reelType.reel
    }
]

interface AvatarProps {
}

const ListReel: React.FC<AvatarProps> = ({}) => {
  const {styles} = useStyles(stylesheet)

  const renderItem = ({ item }: { item: { name: string, avatar: string, type: reelType } }) => (
    <Avatar 
        disable={false} 
        imageUrl={item.avatar} 
        desc={item.name} 
        isAddReel={item.type == reelType.add}
        hasBorder={true}
        style={{width:64, height:64, marginLeft: 10}}
    />
  );

  return (
    <FlatList
        data={listReel}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.name + index}
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={{height:80}}
    />
  );
};

export default ListReel;