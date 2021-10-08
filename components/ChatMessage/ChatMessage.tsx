import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { SPACE } from '../../constants/Layout';


export interface ChatMessageProps {
  id: string;
  isMe: boolean;
  message: string;
}

const ChatMessage = ({ props }: { props: ChatMessageProps }) => {

  const { isMe, message } = props;

  return (
    <View 
      style={[ 
        styles.container, 
        { 
          backgroundColor: isMe ? COLORS.primary : COLORS.gray_4,
          marginLeft: !isMe ? 'auto' : SPACE * 0.625,
          marginRight: isMe ? 'auto' : SPACE * 0.625,
        }
      ]}
    >
      <Text style={[ 
        styles.message, 
        { 
          color: isMe ? COLORS.white : COLORS.black, 
        } 
      ]}>
        { message }
      </Text>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  container: {
    padding: SPACE,
    margin: SPACE * 0.625,
    borderRadius: SPACE,
    maxWidth: '75%',
  },
  message: {

  },
});
