const mainColors = {
  dangerMain: '#ee0f38',

  neutral10: '#FFFFFF',
  neutral20: '#F6F6F6',
  neutral30: '#f3f3f3',
  neutral40: '#E4E4E4',
  neutral50: '#cbcbcb',
  neutral60: '#AAAAAA',
  neutral70: '#8c8c8c',
  neutral80: '#747474',
  neutral100: '#35383d',
};

export const colors = {
  primary: mainColors.dangerMain,
  black: mainColors.neutral100,
  white: mainColors.neutral10,

  backgroundColor: {
    primary: mainColors.neutral20,
    secondary: mainColors.neutral10,
  },

  text: {
    primary: mainColors.neutral100,
    secondary: mainColors.neutral50,
  },

  input: {
    primary: {
      backgroundColor: mainColors.neutral30,
      borderColor: mainColors.neutral70,
      color: mainColors.neutral100,
    },
  },
};
