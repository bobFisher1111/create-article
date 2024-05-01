export const BulletListChildLinkStyles = {
  color: "#087EA4",
  fontSize: "24px",
  width: "850px",
  '@media only screen and (max-width: 600px)': {
    textIndent: '24px',
    fontSize: "18px",
    padding: '0px',
    minWidth: `calc(100vw - ${'48px'})`,
    maxWidth: `calc(100vw - ${'48px'})`,
  },
};

export const BulletListUnorderedListStyles: any = () => ({
  margin: "0px 16px 0px 0px",
});

export const StoryChapterStyle = {
  borderColor: '#0C0D0D',
  padding: '32px 0px 32px 0px',
  lineHeight: '32px',
  fontSize: '32px',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  '@media only screen and (max-width: 600px)': {
    padding: '8px 8px 8px 8px',
    fontSize: '26px',
    lineHeight: '28px',
    letterSpace: 0,
  },
};

export const StoryTitleStyle = {
  borderColor: '#0C0D0D',
  padding: '32px 0px 32px 0px',
  lineHeight: '32px',
  fontSize: '26px',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  '@media only screen and (max-width: 600px)': {
    padding: '8px 8px 8px 8px',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpace: 0,
  },
};

export const StoryTitleStyleRoot = {
  padding: '16px 0px 48px 0px',
};

export const GridBulletListUnorderedListStyles = {
  '@media screen and (max-width: 600px)': {
    width: 'calc(100vw - 24px)',
    margin: "0px 0px 0px 0px",
  }
};

export const ImageGrid = {
  padding: '16px',
  '@media only screen and (max-width: 600px)': {
    padding: '8px',
  },
};

export const CreateArticleImage = () => ({
  width: '100%',
  borderRadius: '4px',
  border: '1px solid black',
  '@media only screen and (max-width: 600px)': {
    width: `calc(100vw - ${'72px'})`,
  },
});

export const CreateArticleIndentImage = () => ({
  height: '394px',
  width: '700px',
  borderRadius: '4px',
  aspectRatio: '16/9',
  '@media only screen and (max-width: 600px)': {
    width: `calc(100vw - ${'72px'})`,
    height: '200px',
  },
});

export const CreateArticleVideo = () => ({
  height: '394px',
  width: '700px',
  borderRadius: '4px',
  aspectRatio: '16/9',
  '@media only screen and (max-width: 600px)': {
    width: `calc(100vw - ${'72px'})`,
    height: '200px',
  },
});

export const LinkStyles = {
  color: "#087EA4",
  fontSize: "24px",
  width: "850px",
  padding: '0px 16px 16px 16px',
  '@media only screen and (max-width: 600px)': {
    fontSize: "18px",
    padding: '0px 16px 0px 16px',
    minWidth: `calc(100vw - ${'32px'})`,
    maxWidth: `calc(100vw - ${'32px'})`,
  },
};

export const ParagraphIndentStyle = {
  textIndent: '24px',
  lineHeight: '32px',
  fontSize: '20px',
  hyphens: 'auto',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  '@media only screen and (max-width: 600px)': {
    textIndent: '12px',
    fontSize: '17px',
    lineHeight: '28px',
    letterSpacing: '-0.003.em',
    padding: '0px 8px 0px 8px',
  },
};

export const titleText = {
  borderColor: '#0C0D0D',
  padding: '8px 0px 0px 0px',
  lineHeight: '32px',
  fontSize: '26px',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 8px 0px 8px',
    fontSize: '22px',
    lineHeight: '24px',
    letterSpace: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  '@media only screen and (min-width: 600px)': {
  },
};

export const TitleTextWithPadding = {
  borderColor: '#0C0D0D',
  padding: '16px 0px 0px 0px',
  lineHeight: '32px',
  fontSize: '26px',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  maxWidth: '1000px',
  '@media only screen and (max-width: 600px)': {
    padding: '16px 0px 0px 0px',
    fontSize: '22px',
    lineHeight: '24px',
    letterSpace: 0
  },
  '@media only screen and (min-width: 600px)': {
    padding: '16px 32px 8px 32px',
  },
};

// currently not being used
export const SectionTextWithFirstLetterBold = {
  padding: '16px 0px 0px 0px',
  textIndent: '40px',
  lineHeight: '32px',
  fontSize: '20px',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  width: '850px',
  alignItems: 'center',
  ':: first-letter': {
    fontWeight: 'bold',
  },
  '@media only screen and (max-width: 600px)': {
    padding: '0px 32px 0px 32px',
    fontSize: '17px',
    lineHeight: '28px',
    letterSpacing: '-0.003.em',
    textIndent: '0px',
  },
  '@media only screen and (min-width: 600px)': {
    padding: '8px 62px 0px 62px',
    textIndent: '24px',
    width: '650px',
  },
  '@media only screen and (min-width: 992px)': {
    textIndent: '24px',
  },
  '@media only screen and (min-width: 1200px)': {
    textIndent: '24px',
    width: '850px'
  },
};

export const BulletListChildTextStyles = {
  padding: '16px 32px 0px 32px',
  lineHeight: '32px',
  fontSize: '20px',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  width: '1000px',
  alignItems: 'center',
  hyphens: 'auto',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 16px 0px 16px',
    fontSize: '17px',
    lineHeight: '28px',
    letterSpacing: '-0.003.em',
    textIndent: '0px',
  },
};

export const sectionTextStyle = {
  lineHeight: '32px',
  fontSize: '20px',
  padding: '0px 32px 0px 32px',
  hyphens: 'auto',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  '@media only screen and (max-width: 600px)': {
    textIndent: '0px',
    fontSize: '17px',
    lineHeight: '28px',
    letterSpacing: '-0.003.em',
    minWidth: `calc(100vw - ${'64px'})`,
    maxWidth: `calc(100vw - ${'64px'})`,
  },
  '@media only screen and (min-width: 600px)': {
    padding: '',
  },
};

export const sectionTextParagraph = {
  lineHeight: '32px',
  fontSize: '20px',
  hyphens: 'auto',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  '@media only screen and (max-width: 600px)': {
    textIndent: '0px',
    fontSize: '17px',
    lineHeight: '28px',
    letterSpacing: '-0.003.em',
    minWidth: `calc(100vw - ${'64px'})`,
    maxWidth: `calc(100vw - ${'64px'})`,
  },
  '@media only screen and (min-width: 600px)': {
    padding: '',
  },
};

export const StoryParagraphTitleRoot = {
  '@media only screen and (max-width: 600px)': {
    justifyContent: 'center',
    padding: '16px 0px 16px 0px',
  },
};

export const quoteText = {
  borderColor: '#0C0D0D',
  padding: '16px 0px 0px 0px',
  lineHeight: '32px',
  fontSize: '26px',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  maxWidth: '1000px',
  fontStyle: 'itallic',
  hyphens: 'auto',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 16px 0px 16px',
    fontSize: '17px',
    lineHeight: '28px',
    letterSpacing: '-0.003.em'
  },
  '@media only screen and (min-width: 600px)': {
    padding: '16px 32px 16px 32px',
  },
};

export const paragraphText = {
  padding: '8px 0px 0px 0px',
  lineHeight: '32px',
  fontSize: '20px',
  hyphens: 'auto',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  alignItems: 'center',
  ':: first-letter': {
    // fontWeight: 'bold',
  },
  '@media only screen and (max-width: 600px)': {
    padding: '0px 8px 8px 8px', // make padding smaller for the top
    fontSize: '17px',
    lineHeight: '28px',
    letterSpacing: '-0.003.em'
  },
};

export default [
  BulletListChildLinkStyles,
  BulletListChildTextStyles,
  BulletListUnorderedListStyles,
  GridBulletListUnorderedListStyles,
  ImageGrid,
  CreateArticleImage,
  CreateArticleVideo,
  CreateArticleIndentImage,
  LinkStyles,
  ParagraphIndentStyle,
  titleText,
  sectionTextStyle,
  SectionTextWithFirstLetterBold,
  sectionTextParagraph,
  StoryChapterStyle,
  StoryParagraphTitleRoot,
  StoryTitleStyleRoot,
  StoryTitleStyle,
  quoteText,
  paragraphText,
  TitleTextWithPadding,
];
