import * as React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import { RootTabScreenProps } from '../../types';
import ChatRoomItem from '../../components/ChatRoomItem';
import { getFormattedChats } from './formatted.helper';
import { CHATS } from '../../APIs/chats.api';
import { useNavigation } from '@react-navigation/core';
import { ChatRoomItemProps } from '../../components/ChatRoomItem/ChatRoomItem';
 

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const currentChats = getFormattedChats(CHATS);

  const navigationHook = useNavigation();
  const onPressEvent = (item: ChatRoomItemProps) => {
    console.log(item);
    navigationHook.navigate('ChatRoom');
  }

  return (
    <View style={styles.page}>
      <FlatList 
        data={currentChats}
        renderItem={
          ({ item }) => {
            return <ChatRoomItem 
              key={item.id} 
              props={item}
              onPressEvent={onPressEvent} 
            />
          }
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {

  }
});
