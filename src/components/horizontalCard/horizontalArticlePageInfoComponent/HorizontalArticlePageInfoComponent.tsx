import React from 'react';
import {
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import CopyLinkComponent from '../../copyLinkComponent/CopyLinkComponent';
import { LinkStyles } from '../../../util/LinkStyles';
import {
  ChipStyle,
  DivMaterialSymbolsOutlined,
  GridArticleInfoComponent,
  HorizAriclePageInfoCompAuthor,
  HorizArticlePageInfoCompDate,
  TypographyArticleInfoRight,
  TypographyArticleInfoLeft,
} from './HorizontalArticlePageInfoComponentStyles';

const HorizontalArticlePageInfoComponent: React.FC<Props> = ({
  authorsId,
  author,
  date,
  sectionLink,
  section,
  articleId,
  series,
}) => {
  const getSeriesIdFromUrl = () => {
    const currentLocation = window.location.href;
    const seriesId = currentLocation.split('/').reverse()[0];
    return (seriesId);
  };

  return (
    <>
      <Grid 
        container 
        direction="row"
        justifyContent="flex-start"
        sx={GridArticleInfoComponent}
      >
          <div 
            className={'material-symbols-outlined'}
            style={DivMaterialSymbolsOutlined()}
          >
            account_circle
          </div>
          <Typography
            color="#2F4C69"
            sx={HorizAriclePageInfoCompAuthor}
          >
            {author} 
          </Typography>
        <Typography
          color="#0C0D0D"
          sx={TypographyArticleInfoRight}
        >
          |
        </Typography>
        <Typography
          color="#2F4C69"
          sx={HorizArticlePageInfoCompDate}
        >
          {date}
        </Typography>
        <Typography
          color="#26282c34162e"
          sx={TypographyArticleInfoRight}
        >
          |
        </Typography>
          <Chip
            color="primary"
            label={section}
            variant="outlined"
            size="small"
            sx={ChipStyle}
          />
        <Typography
          color="#26282c34162e"
          sx={TypographyArticleInfoLeft}
        >
          |
        </Typography>
        {series ? 
          <CopyLinkComponent
            seriesId={getSeriesIdFromUrl()}
            defaultColor={'#667A6E'}
            padding={'0px 0px 0px 16px'}
            email={false}
            turnOnSeries={true}
          />
          :
          <CopyLinkComponent
            authorsId={authorsId}
            articleId={articleId}
            defaultColor={'#667A6E'}
            padding={'0px 0px 0px 16px'}
            email={false}
          />
        }
      </Grid>
    </>
  );
};

export type Props = {
  authorsId: string;
  author: string;
  date: string;
  sectionLink: string;
  section: string;
  articleId: string;
  series: boolean | undefined;
};

export default HorizontalArticlePageInfoComponent;
