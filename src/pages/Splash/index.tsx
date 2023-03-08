import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {TextView} from '../../components';
import {colors, ScreenProps} from '../../utils';

const Splash = ({navigation}: ScreenProps) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.replace('Home');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.content}>
        <TextView style={styles.label}>{`Scoring\nArchery`}</TextView>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
  },
});
