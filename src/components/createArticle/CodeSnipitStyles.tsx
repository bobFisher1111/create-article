export const CopyCodeStyles = (copyIconColor: any) => ({
  padding: "0px",
  color: copyIconColor,
  cursor: 'pointer',
  '&:hover': {
    color: '#2F4C69',
  },
  '@media only screen and (max-width: 600px)': {
    height: "20px",
  },
});

export const GridCopyCodeStyles = {
  padding: "0px 16px 0px 0px",
  '@media only screen and (max-width: 600px)': {
    padding: "0px 8px 0px 0px",
  },
};

export const GridTitleStyle = {
  color: "lightgrey",
  padding: "0px 0px 0px 16px",
  marginRight: "auto"
};

export const HeaderStyles = {
  height: "48px",
  background: "#1f212a",
  borderTopRightRadius: "8px",
  borderTopLeftRadius: "8px",
  borderBottom: "1px grey solid",
  '@media only screen and (min-width: 600px)': {
    minWidth: "600px",
    maxWidth: "600px",
  },
  '@media only screen and (min-width: 820px)': {
    minWidth: "800px",
    maxWidth: "800px",
  },
  '@media only screen and (min-width: 920px)': {
    minWidth: "900px",
    maxWidth: "900px",
  },
  '@media only screen and (max-width: 600px)': {
    "height": "36px",
  },
};

export const PreTagStyles: any = () => ({
  fontSize: '14px',
  overflow: "auto",
  color: "white",
  textAlign: 'left',
  // "fontFamily": 'source-code-pro, Menlo, Monaco, "Courier New", Courier, monospace',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
  margin: "0em",
  fontWeight: "bold",
  '@media screen and (max-width: 600px)': {
    minWidth: `calc(100vw - ${'8px'})`,
    maxWidth: `calc(100vw - ${'8px'})`,
  },
  '@media screen and (min-width: 600px)': {
    fontSize: "26px",
  },
});

export const RootStyles = {
  padding: "8px",
  '@media only screen and (max-width: 600px)': {
    minWidth: `calc(100vw - ${'32px'})`,
    maxWidth: `calc(100vw - ${'32px'})`,
  },
};

export const TitleOfCodeStyles = {
  fontSize: "16px",
  fontWeight: "bold",
};

export default [
  CopyCodeStyles,
  GridCopyCodeStyles,
  GridTitleStyle,
  HeaderStyles,
  PreTagStyles,
  RootStyles,
  TitleOfCodeStyles,
];
