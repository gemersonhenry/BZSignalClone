import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';

import { chatMessageInputStyles as styles } from './ChatMessageInput.styles';

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

