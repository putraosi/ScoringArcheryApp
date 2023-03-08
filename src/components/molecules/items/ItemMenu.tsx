import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextView} from '../../atoms';
import {colors, Common, RADIUS} from '../../../utils';

interface Data {
  name: string;
  icon: any;
}

interface ItemMenuProps {
  data: Data;
  isLast: number;
}

const ItemMenu = ({data, isLast}: ItemMenuProps) => {
  const Icon = data?.icon;
  return (
    <View
      style={[
        styles.container,
        {
          marginRight: isLast ? 16 : 0,
        },
      ]}>
      <Icon />

      <TextView style={styles.label}>{data?.name}</TextView>
    </View>
  );
};

export default ItemMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: RADIUS,
    ...Common.shadow,
  },

  label: {
    fontSize: 16,
    color: colors.primary,
    marginTop: 8,
  },
});
