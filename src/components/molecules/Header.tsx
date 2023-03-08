import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcBack} from '../../assets';
import {colors, HEIGHT_HEADER} from '../../utils';
import {TextView} from '../atoms';

interface HeaderProps {
  IconLeft?: any;
  IconRight?: any;
  title: string;
  onDismiss?(): void;
  onPress?(): void;
}

const Header = ({
  title,
  IconLeft = IcBack,
  IconRight,
  onDismiss,
  onPress,
}: HeaderProps) => {
  let backgroundColor = colors.primary;
  let color = colors.white;

  const showIconRight = IconRight ? true : false;

  return (
    <View style={[styles.container, {backgroundColor}]}>
      {onDismiss && (
        <TouchableOpacity onPress={onDismiss}>
          <IconLeft style={styles.iconLeft} />
        </TouchableOpacity>
      )}
      <TextView
        style={[
          styles.title,
          {
            color,
          },
        ]}>
        {title}
      </TextView>

      {showIconRight && <IconRight />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEIGHT_HEADER,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    zIndex: 2,
  },

  iconLeft: {
    marginRight: 20,
  },

  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
  },

  label: {
    color: colors.white,
    fontWeight: '500',
  },
});
