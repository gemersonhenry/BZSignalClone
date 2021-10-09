import * as React from 'react';

import { FontAwesome5 } from '@expo/vector-icons'; 

interface SlileProps {
  size?: number;
}

const SlileIcon = (props: SlileProps) => {
  return (
    <FontAwesome5 name="smile" size={props.size ?? 24} color="black" style={{}} />
  );
};

export default SlileIcon;
