import React from 'react';
import {View} from 'react-native';

interface GapProps {
  width?: number;
  height?: number;
}

const Gap = ({width = 0, height = 0}: GapProps) => {
  return (
    <View
      style={{
        width: width,
        height: height,
      }}
    />
  );
};

export default Gap;
