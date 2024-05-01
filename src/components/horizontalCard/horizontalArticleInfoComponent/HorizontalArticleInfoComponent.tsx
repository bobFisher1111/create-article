import React from 'react';
import {
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import CopyLinkComponent from '../../copyLinkComponent/CopyLinkComponent';
import { LinkStyles } from '../../../util/LinkStyles';
import {
  ChipNoPointer,
  ChipStyle,
  DivMaterialSymbolsOutlined,
  DivSeriesLeftPadding,
  GridHorizontalInfo,
  TypographyHorizontalInfoText,
} from './HorizontalArticleInfoComponentStyle';

const HorizontalArticleInfoComponent: React.FC<Props> = ({
  section,
  authorsId,
  articleId,
  authorPage,
  aughtorsName,
  sectionLink,
  sectionPage,
  sectionType,
  series,
  seriesId,
}) => {
  
  return (
    <Grid 
      container
      direction="row"    
      sx={GridHorizontalInfo}
    >
      {!authorPage ?
          <Grid 
            className={'material-symbols-outlined'}
            sx={DivMaterialSymbolsOutlined()}
          >
            account_circle
          </Grid>
        :
        <Grid 
          className={'material-symbols-outlined'}
          style={DivMaterialSymbolsOutlined()}
        >
          account_circle
        </Grid>
      }
      {!authorPage ? 
          <Typography
            // color="#2F4C69"
            sx={TypographyHorizontalInfoText}
          >
            {aughtorsName}
          </Typography> 
        :
        <Typography
          // color="#2F4C69"
          sx={TypographyHorizontalInfoText}
        >
          {aughtorsName}
        </Typography>
      }
      {!sectionPage ?
          <Chip
            color="primary"
            label={section}
            variant="outlined"
            size="small"
            sx={ChipStyle}
          />
        :
        <Chip
          color="primary"
          label={sectionType}
          variant="outlined"
          size="small"
          sx={ChipNoPointer}
        />
      }
      {series &&
           <div
             style={DivSeriesLeftPadding()}
           >
               <Chip
                 color="secondary"
                 label={'Series'}
                 variant="outlined"
                 size="small"
                 sx={ChipStyle}
               />
           </div>
      }
      {authorPage && series && sectionPage &&
            <CopyLinkComponent
              authorsId={authorsId}
              articleId={articleId}
              defaultColor={'#667A6E'}
              padding={'0px 0px 0px 16px'}
              email={false}
            />
      }
    </Grid>
  );
};

export type Props = {
  section: string;
  authorsId: string;
  articleId: string;
  authorPage: boolean | undefined;
  aughtorsName: string;
  sectionLink: string;
  sectionPage: boolean | undefined;
  series?: boolean | undefined;
  seriesId?: string;
  sectionType?: string;
};
    
export default HorizontalArticleInfoComponent;
