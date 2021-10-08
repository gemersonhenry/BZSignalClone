import { Feather } from '@expo/vector-icons';

import * as React from 'react';
import { getPaddings, IIconPaddings } from '../icons.helper';

interface CameraProps extends IIconPaddings {
  size?: number;
}

const Camera = (props: CameraProps) => {
  const paddings = getPaddings(props);
  return (
    <Feather 
      name="camera" 
      size={props.size ?? 24} 
      color="black"
      style={{ 
        ...paddings
      }} 
    />
  );
};

export default Camera;

