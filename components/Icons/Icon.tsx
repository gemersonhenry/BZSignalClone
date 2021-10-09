import { 
  AntDesign,
  Feather, 
  FontAwesome, 
  FontAwesome5, 
  Ionicons, 
  MaterialCommunityIcons 
} from '@expo/vector-icons';
import * as React from 'react';
import { COLORS } from '../../constants/Colors';
import { 
  AntDesignNames,
  FeatherNames, 
  FontAwesome5Names, 
  FontAwesomeNames, 
  IoniconsNames, 
  MatComIconsNames 
} from './Icons.constants';
import { getPaddings, IIconPaddings } from './icons.helper';

interface IconProps extends IIconPaddings {
  name: string;
  size?: number;
  color?: string;
  iconType?: 'Ionicons' | 'Feather' | 'MatComIcons' | 'FontAwesome5' | 'FontAwesome' | 'AntDesign' | 'Default';
}

const Icon = (props: IconProps) => {
  const { name, iconType } = props;
  const type = iconType ?? 'Default';

  // icon type
  const isIonicons = (type === 'Default' || type === 'Ionicons') && IoniconsNames.includes(name);
  const isFeather = (type === 'Default' || type === 'Feather') && FeatherNames.includes(name);
  const isMatComIcons = (type === 'Default' || type === 'MatComIcons') && MatComIconsNames.includes(name);
  const isFontAwesome5 = (type === 'Default' || type === 'FontAwesome5') && FontAwesome5Names.includes(name);
  const isFontAwesome = (type === 'Default' || type === 'FontAwesome') && FontAwesomeNames.includes(name);
  const isAntDesign = (type === 'Default' || type === 'AntDesign') && AntDesignNames.includes(name);

  // size
  const size = props.size ?? 24;

  // styles
  const paddings = getPaddings(props);
  const styles = { 
    ...paddings,
    color: props.color ?? COLORS.white
  }

  return (
    <>
      { isIonicons && <Ionicons name={name as any} size={size} color="black" style={styles}/> }
      { isFeather && <Feather name={name as any} size={size} color="black" style={styles}/> }
      { isMatComIcons && <MaterialCommunityIcons name={name as any} size={size} color="black" style={styles}/> }
      { isFontAwesome5 && <FontAwesome5 name={name as any} size={size} color="black" style={styles}/> }
      { isFontAwesome && <FontAwesome name={name as any} size={size} color="black" style={styles}/> }
      { isAntDesign && <AntDesign name={name as any} size={size} color="black" style={styles}/> }
    </>
  );
};

export default Icon;

