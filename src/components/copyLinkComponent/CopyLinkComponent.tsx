import React, { useState } from 'react';
import copyLink from '../../util/copyLink';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {
  ContentCopyIconStyle,
  EmailOutlinedIconStyles,
} from './CopyLinkComponentStyles';


const CopyLinkComponent: React.FC<Props> = ({
  authorsId,
  articleId,
  defaultColor,
  padding,
  email,
  authorsEmail,
  seriesId,
  turnOnSeries,
}) => {
  const [copyIconColor, setCopyIconColor] = useState<string>(defaultColor);
  const [emailIcon, setEmailIcon] = useState<string>(defaultColor);
  const articleUrl = `${'localhost:3000'}/article/${authorsId}/${articleId}`;
  const seriesUrl = `${'localhost:3000'}/series/${seriesId}`;
  const copyUrls = turnOnSeries ? seriesUrl : articleUrl;
  return (
    <>
      {email ?
        <EmailOutlinedIcon
          sx={EmailOutlinedIconStyles(emailIcon)}
          id="copyEmail"
          onClick={() => copyLink(setEmailIcon, authorsEmail)}
        />
        :
        <ContentCopyIcon
          sx={ContentCopyIconStyle(copyIconColor, padding)}
          onClick={() => copyLink(setCopyIconColor, copyUrls)}
        />
      }
    </>
  );
};

export type Props = {
  authorsId?: string;
  articleId?: string;
  defaultColor: string;
  padding?: string;
  email: boolean;
  authorsEmail?: string;
  seriesId?: string;
  turnOnSeries?: boolean;
};
  
export default CopyLinkComponent;
  