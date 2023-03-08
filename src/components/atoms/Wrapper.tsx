import React from 'react';
import {StyleSheet, View} from 'react-native';
import { colors } from '../../utils';

interface WrapperProps {
  children: any;
  style?: object;
}

const Wrapper = ({children, style}: WrapperProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16,
  },
});
