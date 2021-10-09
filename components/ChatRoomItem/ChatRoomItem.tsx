import * as React from 'react';
import { Text, View, Image, Pressable } from 'react-native';

import { ChatRoomItemStyles as styles } from './ChatRoomItem.styles';

export interface ChatRoomItemProps {
  id: string;
  imageSrc: string;
  name: string;
  hour: string;
  lastMessage: string;
  numberOfNewMessages?: number;
}

interface Props {
  props: ChatRoomItemProps;
  onPressEvent?: (item: ChatRoomItemProps) => void;
}

const ChatRoomItem = ({ props, onPressEvent }: Props) => {

  const { imageSrc, hour, lastMessage, name, numberOfNewMessages } = props;

  const Badge = ({ count }: { count: number }) => {
    return (
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}> { count } </Text>
      </View>
    )
  }

  const onPress = () => {
    if (onPressEvent) {
      onPressEvent(props);
    }
  }

  return (
    <Pressable 
      onPress={() => onPress()}
      style={styles.container}
    >
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
    </Pressable>
  );
};

export default ChatRoomItem;


