export const CreateArticleRoot = {
  // paddingTop: '8px',
  '@media only screen and (max-width: 600px)': {
    minWidth: 'calc(100vw - 16px)',
    maxWidth: 'calc(100vw - 16px)',
  },
  '@media only screen and (min-width: 600px)': {
    width: '600px',
  },
  '@media only screen and (min-width: 768px)': {
    width: '730px',
  },
  '@media only screen and (min-width: 992px)': {
    width: '960px',
  },
  '@media only screen and (min-width: 1200px)': {
    width: '900px',
  },
  '@media only screen and (min-width: 1280px)': {
    width: '960px',
  },
};

export const CreateArticleStyle = {
  '@media only screen and (max-width: 600px)': {
    overflowX: "hidden",
  },
};

export const GridRoot = {
  padding: "16px 0px 200px 0px",
  '@media only screen and (max-width: 600px)': {
    padding: "0px 0px 200px 0px",
  },
};

export const GridHeader = {
  paddingTop: '37px',
};

export const GridAuthorComponent = {
  '@media only screen and (max-width: 1200px)': {
    display: 'none',
  },
};

export default [
  CreateArticleRoot,
  CreateArticleStyle,
  GridRoot,
  GridHeader,
  GridAuthorComponent,
];
