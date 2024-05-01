export const ChipNoPointer = {
  borderRadius: '4px',
  color: '#0C0D0D',
  '@media only screen and (max-width: 600px)': {
    fontSize: '10px',
    '&.MuiChip-root': {
      height: '24px',
    },
  },
};

export const ChipStyle = {
  color: '#0C0D0D',
  cursor: 'pointer',
  borderRadius: '4px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '10px',
    '&.MuiChip-root': {
      height: '24px',
    },
  },
};

export const DivMaterialSymbolsOutlined = () => ({
  fontSize: '20px',
  color: '#667A6E',
  marginRight: '4px',
  lineHeight: '24px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '18px',
  },
});

export const DivSeriesLeftPadding = () => ({
  padding: '0px 0px 0px 16px',
});

export const GridHorizontalInfo = {
  '@media only screen and (max-width: 600px)': {
    padding: '0px 4px 2px 4px',
  },
};

export const TypographyHorizontalInfoText = {
  color: '#667A6E',
  fontSize: '16px',
  paddingRight: '16px',
  lineHeight: '24px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '14px',
  },
  '@media only screen and (min-width: 600px)': {
    width: '100%',
  },
  '@media only screen and (min-width: 992px)': {
    width: 'auto',
  },
};

export default [
  ChipNoPointer,
  ChipStyle,
  DivMaterialSymbolsOutlined,
  DivSeriesLeftPadding,
  GridHorizontalInfo,
  TypographyHorizontalInfoText,
];
