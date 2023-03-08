import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../utils';

interface ContainerProps {
  children: any;
  backgroundColor?: string;
  statusBarColor?: string;
  spaceBottom?: boolean;
  secondary?: boolean;
}

const Container = ({
  children,
  backgroundColor = colors.backgroundColor.primary,
  statusBarColor = colors.primary,
  spaceBottom,
  secondary,
}: ContainerProps) => {
  const insets = useSafeAreaInsets();

  backgroundColor = secondary
    ? colors.backgroundColor.secondary
    : backgroundColor;

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View
        style={[
          styles.wrapper,
          {
            backgroundColor: statusBarColor,
            height: insets.top,
            zIndex: 1,
          },
        ]}
      />
      <View
        style={[
          styles.content,
          {
            backgroundColor,
            paddingBottom: spaceBottom ? insets.bottom : 0,
          },
        ]}>
        {children}
      </View>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },

  wrapper:{
    width: '100%',
  },

  content:{
    flex: 1
  }
});
