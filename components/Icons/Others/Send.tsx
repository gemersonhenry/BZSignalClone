import { Ionicons } from '@expo/vector-icons';

import * as React from 'react';
import { COLORS } from '../../../constants/Colors';
import { getPaddings, IIconPaddings } from '../icons.helper';

interface SendIconProps extends IIconPaddings {
  size?: number;
  color?: string;
}

const SendIcon = (props: SendIconProps) => {
  const paddings = getPaddings(props);
  return (
    <Ionicons 
      name="send" 
      size={props.size ?? 24} 
      color="black" 
      style={{ 
        ...paddings,
        color: props.color ?? COLORS.white
      }}
    />
  );
};

export default SendIcon;
