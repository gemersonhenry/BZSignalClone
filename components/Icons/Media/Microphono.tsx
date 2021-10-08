import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as React from 'react';
import { getPaddings, IIconPaddings } from '../icons.helper';

interface MicrophoneProps extends IIconPaddings {
  size?: number;
}

const Microphone = (props: MicrophoneProps) => {
  const paddings = getPaddings(props);
  return (
    <MaterialCommunityIcons 
      name="microphone-outline" 
      size={props.size ?? 24} 
      color="black"
      style={{ ...paddings }}
    />
  );
};

export default Microphone;
