import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, FlatList } from 'react-native';
import { COMPLETE_CHAT } from '../../APIs/chats.api';
import ChatMessage from '../../components/ChatMessage';
import { ChatMessageProps } from '../../components/ChatMessage/ChatMessage';
import ChatMessageInput from '../../components/ChatMessageInput';
import { COLORS } from '../../constants/Colors';

const myID = 'u1';

interface ChatRoomScreenProps {}

const ChatRoomScreen = (props: ChatRoomScreenProps) => {  

  const formattedMessages = COMPLETE_CHAT.messages.map(m => {
    return {
      id: m.id,
      message: m.content,
      isMe: m.user.id === myID,
    } as ChatMessageProps;
  });

  return (
    <View style={styles.page}>
      <FlatList
        style={[ styles.list ]}
        data={formattedMessages}
        renderItem={
          ({ item }) => <ChatMessage key={item.id} props={item} />
        }
      />
      <ChatMessageInput />
    </View>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  list: {

  }
});
