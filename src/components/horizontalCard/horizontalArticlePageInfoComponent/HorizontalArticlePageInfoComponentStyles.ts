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
  color: '#2F4C69',
  marginRight: '4px',
  lineHeight: '24px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
});

export const GridArticleInfoComponent = {
  padding: '4px 0px 0px 0px',
};

export const HorizAriclePageInfoCompAuthor = {
  fontSize: '16px',
  paddingRight: '16px',
  '@media only screen and (max-width: 600px)': {
    paddingTop: '2px',
    fontSize: '12px',
    lineHeight: "1.75",
  },
};

export const HorizArticlePageInfoCompDate = {
  fontSize: '16px',
  paddingRight: '16px',
  '@media only screen and (max-width: 600px)': {
    paddingTop: '2px',
    fontSize: '12px',
  },
};

export const TypographyArticleInfoRight = {
  fontSize: '16px',
  paddingRight: '16px',
};

export const TypographyArticleInfoLeft = {
  fontSize: '16px',
  paddingLeft: '16px'
};

export default [
  ChipStyle,
  DivMaterialSymbolsOutlined,
  GridArticleInfoComponent,
  HorizAriclePageInfoCompAuthor,
  HorizArticlePageInfoCompDate,
  TypographyArticleInfoRight,
  TypographyArticleInfoLeft,
];
