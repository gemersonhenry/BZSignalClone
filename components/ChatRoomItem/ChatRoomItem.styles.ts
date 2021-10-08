import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';

const imageSize = 50;
const badgeSize = 24;
const baseSpace = 10;
const baseFontSize = 16;

export const ChatRoomItemStyles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    padding: baseSpace,
  },
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2,
    marginRight: baseSpace,
  },
  badgeContainer: {
    backgroundColor: COLORS.primary,
    width: badgeSize,
    height: badgeSize,
    borderRadius: badgeSize / 2,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: imageSize * 0.9,
    top: imageSize * 0.1,
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  rightContainer: {
    flex: 1,
  },
  principal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: baseFontSize,
  },
  hour: {
    color: 'gray',
    fontSize: baseFontSize * 0.875,
  },
  message: {
    color: 'gray',
    fontSize: baseFontSize * 0.875,
    marginTop: 4,
  },
});