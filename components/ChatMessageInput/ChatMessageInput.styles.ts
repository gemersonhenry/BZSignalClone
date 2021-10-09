import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/Colors';
import { FONT_SIZE } from '../../constants/Layout';

export const chatMessageInputStyles = StyleSheet.create({
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
