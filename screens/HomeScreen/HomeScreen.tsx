import * as React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import { RootTabScreenProps } from '../../types';
import ChatRoomItem from '../../components/ChatRoomItem';
import { getFormattedChats } from './formatted.helper';
import { CHATS } from '../../APIs/chats.api';


const imageSrc = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg';
 

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const currentChats = getFormattedChats(CHATS);

  return (
    <View style={styles.page}>
      <FlatList 
        data={currentChats}
        renderItem={({ item }) => <ChatRoomItem key={item.id} props={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {

  }
});
