import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { FONT_SIZE } from '../../constants/Layout';
import SmileIcon from '../Icons/Faces/Smile';
import Camera from '../Icons/Media/Camera';
import Microphone from '../Icons/Media/Microphono';
import SendIcon from '../Icons/Others/Send';

interface ChatMessageInputProps {}

const ChatMessageInput = (props: ChatMessageInputProps) => {

  const [ message, setMessage ] = useState('');

  const sendMessage = () => {
    if (message) {
      console.log('message was sent to other person');
      setMessage('');
    } else {
      console.log('you should enter a message');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
      keyboardVerticalOffset={100} // posiblemente esto sea solo para IOS
    >
      <View style={styles.inputContainer}>
        <SmileIcon size={20} />
        <TextInput 
          style={styles.inputText}
          placeholder="Mensaje..."
          value={message}
          onChangeText={(m) => setMessage(m)}
        />
        <Camera pl={10} size={20} />
        <Microphone pl={10} size={20} />
      </View>
      <Pressable
        onPress={() => sendMessage()} 
        style={styles.buttonContainer}
      >
        {
          message ? <SendIcon size={16} /> : <Text style={styles.buttonText}>+</Text>
        }
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default ChatMessageInput;

const styles = StyleSheet.create({
  container: {
    // height: 60,
    flexDirection: 'row',
    backgroundColor: COLORS.gray_5,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  inputContainer: {
    backgroundColor: COLORS.gray_5,
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: FONT_SIZE * 1.125,
    paddingHorizontal: 10, 
    flex: 1,
    height: '80%',
    borderRadius: 10,
    backgroundColor: COLORS.gray_6,
    marginLeft: 10,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.white,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZE * 1.5,
    justifyContent: 'center',
    paddingBottom: 4,
  }
});
