export const ContentCopyIconStyle = (prop: string, padding: any) => ({
  color: prop,
  padding: padding,
  cursor: 'pointer',
  '&:hover': {
    color: '#2F4C69',
  },
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
    padding: '2px 0px 0px 16px',
  },
});

export const EmailOutlinedIconStyles = ( prop: string ) => ({
  cursor: 'pointer',
  color: prop,
  '&:hover': {
    color: '#2F4C69',
  },
  paddingTop: '5px',
  '@media only screen and (max-width: 600px)': {
    height: '30px',
    padding: '0px',
  },
});

export default [
  ContentCopyIconStyle,
  EmailOutlinedIconStyles,
];
