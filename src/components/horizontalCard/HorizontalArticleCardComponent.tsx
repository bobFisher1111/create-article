import React, { useEffect, useState } from 'react';
import {
  Card,
  Grid,
  CardMedia,
  Box,
  Typography,
} from '@mui/material';
// import { useSelector } from 'react-redux';
import HorizontalArticleInfoComponent from './horizontalArticleInfoComponent/HorizontalArticleInfoComponent';
import HorizontalArticlePageInfoComponent from './horizontalArticlePageInfoComponent/HorizontalArticlePageInfoComponent';
import {
  ArticlePageRoot,
  CardHorizontalArticleInfo,
  CardMedaiArticleVideo,
  GridHorizontalArticleContainer,
  GridHorizontalArticleMaxWidth,
  ImageHorizonatalArticleStyles,
  TypographyHorizontalArticleDate,
  TypographyHorizontalArticleSubTitle,
  TypographyHorizontalArticleTitle,
  TitleStyle,
} from './HorizontalArticleCardComponentStyles';
import { LinkStyles } from '../../util/LinkStyles';

const HorizontalArticleCardComponent: React.FC<Props> = ({
  title,
  author,
  cardTextWidth,
  date,
  imageWidth,
  articlePage,
  articleSubTitle,
  useVideoInsteadOfImage,
  section,
  authorsId,
  articleId,
  videoOrImageCover,
  sectionLink,
  series,
  articlePageList,
  seriesId,
  mobileImageWidth,
  videoHeight,
  sectionType,
}) => {
  const [authorPage, setAuthorPage] = useState<boolean>();
  const [sectionPage, setSectionPage] = useState<boolean>();
  // const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  // const getAuthorData = getWebsiteData && getWebsiteData?.websiteData?.authors?.filter((item: any) => {
  //   return item.authorId === authorsId;
  // });
  useEffect(() => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split('/');
    const checkIfIncludesAuthor = getIdFromCurrentLocation.includes('author');
    setAuthorPage(checkIfIncludesAuthor);
  }, []);

  useEffect(() => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split('/');
    const checkIfIncludesSection = getIdFromCurrentLocation.includes(sectionLink);
    setSectionPage(checkIfIncludesSection);
  }, []);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent={!articlePage || articlePageList ? 'left' : 'center'}
        sx={GridHorizontalArticleContainer}
      >
        <Grid
          sx={GridHorizontalArticleMaxWidth(imageWidth)}
        >
          {!useVideoInsteadOfImage ?
              <Box
                component="img"
                alt="Article Cover Image"
                src={videoOrImageCover}
                sx={ImageHorizonatalArticleStyles(articlePage, mobileImageWidth)}
              />
            :
            <CardMedia
              component="iframe"
              image={videoOrImageCover}
              allowFullScreen
              sx={CardMedaiArticleVideo(articlePage, videoHeight, mobileImageWidth)}
            />
          }
          {articlePage && 
            <Grid
              container
              justifyContent="flex-start"
              alignItems="center"
              sx={ArticlePageRoot}
            >
              {section !== 'Stories' &&
                <Typography
                  sx={TitleStyle}
                >
                  {title}
                </Typography>
              }
              <HorizontalArticlePageInfoComponent
                authorsId={authorsId}
                author={author}
                date={date}
                sectionLink={sectionLink}
                section={section}
                articleId={articleId}
                series={series}
              />
            </Grid>
          }
        </Grid>
        {!articlePage && 
          <Card
            sx={CardHorizontalArticleInfo(articlePageList)}
          >
              <Typography
                sx={TypographyHorizontalArticleTitle(articlePage)}
                color="#2F4C69"
              >
                {title}
              </Typography>
              <Typography
                sx={TypographyHorizontalArticleSubTitle(articlePageList, cardTextWidth)}
              >
                {articleSubTitle}
              </Typography>
              {!articlePage &&
                  <Typography
                    color="grey"
                    sx={TypographyHorizontalArticleDate}
                  >
                    {date}
                  </Typography>
              }
            <HorizontalArticleInfoComponent
              section={section}
              authorsId={authorsId}
              articleId={articleId}
              authorPage={authorPage}
              aughtorsName={'Authors Name'}
              sectionLink={sectionLink}
              sectionPage={sectionPage}
              series={series}
              seriesId={seriesId}
              sectionType={sectionType}
            />
          </Card>
        }
      </Grid>
    </div>
  );
};

export type Props = {
  title?: string;
  author: string;
  cardTextWidth: string;
  date: string;
  imageWidth: string;
  articlePage: boolean;
  articleSubTitle?: string;
  titleFontSize?: string;
  useVideoInsteadOfImage: boolean;
  section: string;
  authorsId: string;
  articleId: string;
  videoOrImageCover: string;
  sectionLink: string;
  series?: boolean;
  articlePageList?: any;
  seriesId?: string;
  mobileImageWidth: string;
  videoHeight: boolean;
  sectionType?: string;
};
  
export default HorizontalArticleCardComponent;
