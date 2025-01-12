import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  backgroundTheme?:keyof typeof Colors.dark & keyof typeof Colors.light
};

export function ThemedView({ style, lightColor, darkColor,backgroundTheme, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, backgroundTheme || "background");

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
