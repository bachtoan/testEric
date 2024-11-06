import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {styleSheet} from './styles';

export type TabButton = {
  key: number;
  name: string;
  label?: number;
};

type TabBarProps = {
  onChangeTab?: (index: number) => void;
  tabList: TabButton[];
  initialTab?: number;
  disabled?: boolean;
};

export const TabBar: React.FC<TabBarProps> = ({
  onChangeTab,
  tabList,
  initialTab = 0,
  disabled = false,
}) => {
  const {styles} = useStyles(styleSheet);
  const {width} = useWindowDimensions();
  const [focusIndex, setFocusIndex] = useState(initialTab);

  useEffect(() => {
    onChangeTab?.(focusIndex);
  }, [focusIndex]);

  useEffect(() => {
    setFocusIndex(initialTab);
  }, [initialTab]);

  const handleSelectTab = (index: number) => {
    focusIndex !== index && setFocusIndex(index);
  };

  const renderItem = ({item, index}: {item: {name: string}}) => (
    <TouchableOpacity
      style={styles.button(focusIndex === index)}
      onPress={() => handleSelectTab(index)}
      key={item.name}>
      <Text style={styles.buttonText(focusIndex === index)}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={tabList}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.name + index}
      horizontal
      bounces={false}
      bouncesZoom={false}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};
