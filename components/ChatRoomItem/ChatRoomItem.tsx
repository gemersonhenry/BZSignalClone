import * as React from 'react';
import { Text, View, Image } from 'react-native';

import { ChatRoomItemStyles as styles } from './ChatRoomItem.styles';

export interface ChatRoomItemProps {
  id: string;
  imageSrc: string;
  name: string;
  hour: string;
  lastMessage: string;
  numberOfNewMessages?: number;
}

const ChatRoomItem = ({ props }: { props: ChatRoomItemProps }) => {

  const { imageSrc, hour, lastMessage, name, numberOfNewMessages } = props;

  const Badge = ({ count }: { count: number }) => {
    return (
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}> { count } </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image} 
        source={{ uri: imageSrc }} 
      />
      {
        numberOfNewMessages && <Badge count={numberOfNewMessages} />
      }
      <View style={styles.rightContainer}>
        <View style={styles.principal}>
          <Text style={styles.name}> { name } </Text>
          <Text style={styles.hour}> { hour } </Text>
        </View>
        <Text 
          style={styles.message} 
          ellipsizeMode='middle'
          numberOfLines={1}
        >
          { lastMessage }
        </Text>
      </View>
    </View>
  );
};

export default ChatRoomItem;


