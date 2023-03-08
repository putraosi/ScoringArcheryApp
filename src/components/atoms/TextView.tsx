import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../utils';

interface TextViewProps {
  style?: object;
  numberOfLines?: number;
  children: any;
  onPress?: any;
}

const TextView = ({style, numberOfLines, children, onPress}: TextViewProps) => {
  return (
    <Text
      style={[styles.label, style]}
      numberOfLines={numberOfLines}
      onPress={onPress}>
      {children}
    </Text>
  );
};

export default TextView;
const styles = StyleSheet.create({
  label: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: '400',
  },
});
