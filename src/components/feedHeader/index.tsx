import React from 'react';
import {View, Text} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';
import Avatar from '../avatar';

interface Props {
  name: string;
  desc: string;
  avatar: string;
}

const FeedHeader: React.FC<Props> = ({name, desc, avatar}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar style={styles.avatar} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.name}>{desc}</Text>
        </View>
      </View>
    </View>
  );
};

export default FeedHeader;
