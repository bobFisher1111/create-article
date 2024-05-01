import React, { useEffect, useState } from 'react';
import {
  Grid,
} from '@mui/material';
import CreateArticle from '../createArticle/CreateArticle';
import {
  CreateArticleRoot,
  CreateArticleStyle,
  GridRoot,
  GridHeader,
} from './ArticlePageStyles';
import HorizontalArticleCardComponent from '../horizontalCard/HorizontalArticleCardComponent';

const ArticlePage: React.FC = () => {
  const [articleData, setArticleData] = useState<String>();
  const [horizontalCard, setHorizontalCard] = useState<any>();

  const fetchData = async() => {
    let resp = await fetch('http://localhost:3000/config/Article.txt');
    let final = await resp.text();
    return setArticleData(final);
  }

  const fetchHeaderData = async() => {
    let resp = await fetch('http://localhost:3000/config/HorizontalCardData.json');
    let final = await resp.json();
    return setHorizontalCard(final);
  }
  
  useEffect(() => {
    fetchData();
    fetchHeaderData();
  }, []);

  const articleArray = articleData?.split("`");

  return (
    <>
      <Grid
        container
        justifyContent='center'
        alignContent='center'
        sx={GridRoot}
      >
        <Grid
          item
          container
          justifyContent="center"
          alignContent='flex-start'
          xs={12}
          sm={12}
          md={12}
          lg={9}
          xl={9}
          sx={GridHeader}
        >
          <Grid
            sx={CreateArticleRoot}
          >
            <Grid
              item
              sx={CreateArticleStyle}
            >
              <HorizontalArticleCardComponent
                author={horizontalCard?.author}
                cardTextWidth={'1000px'}
                date={horizontalCard?.publishedDate}
                imageWidth={'1000px'}
                articlePage={true}
                articleSubTitle={horizontalCard?.articleSubTitle}
                useVideoInsteadOfImage={horizontalCard?.useVideoInsteadOfImage}
                authorsId={horizontalCard?.authorsId}
                articleId={horizontalCard?.articleId}
                videoOrImageCover={horizontalCard?.coverImageOrVideo}
                sectionLink={horizontalCard?.sectionLink}
                section={horizontalCard?.sections}
                title={horizontalCard?.articleTitle}
                mobileImageWidth={'22px'}
                videoHeight={false}
            />
              {articleArray?.map((item: any) => (
                CreateArticle(item)
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ArticlePage;