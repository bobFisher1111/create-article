import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import hljs from 'highlight.js';
import "highlight.js/styles/base16/dracula.css";
import { 
  CopyCodeStyles,
  GridCopyCodeStyles,
  GridTitleStyle,
  HeaderStyles,
  PreTagStyles,
  RootStyles,
  TitleOfCodeStyles,
}  from './CodeSnipitStyles';
import { copyFormattedTextToClipboard } from '../../util/copyFormattedTextToClipboard';

const CodeSnipit: React.FC<Props> = ({
  displayCode,
}) => {
  const [copyIconColor, setCopyIconColor] = useState<string>('lightgrey');
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const removeCodeSnipit = displayCode.slice(12);
  let subMatch = "";
  const getMatch = removeCodeSnipit.match(/\[(.*?)\]/);
  if (getMatch) {
    subMatch = getMatch[1];
  }
  let count = 0;
  displayCode = displayCode.replace(/\[.*?\]/g, (match) => {
    count++;
    return count <= 2 ? '' : match;
  });
  
  return (
    <Grid
      sx={RootStyles}
    >   
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={HeaderStyles}
      >
        <Grid
          sx={GridTitleStyle}
        >
          <Typography
            sx={TitleOfCodeStyles}
          >
            {subMatch}
          </Typography>
        </Grid>
        <Grid
          sx={GridCopyCodeStyles}
        >
          <ContentCopyIcon
            sx={CopyCodeStyles(copyIconColor)}
            onClick={() => copyFormattedTextToClipboard(setCopyIconColor, displayCode)}
          />
        </Grid>
      </Grid>
      <pre
        style={PreTagStyles()}
      > 
        <code className="language-javascript">
          {displayCode}
        </code>
      </pre>
    </Grid>
  );
};

export type Props = {
  displayCode: string;
}

export default CodeSnipit;
