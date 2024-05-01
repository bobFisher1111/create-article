import React from 'react';
import { 
  Grid,
  Typography,
} from '@mui/material';
import {
  AlignTextStyle,
  FinalScoreStyle,
  LeftRootItemBottomStyles,
  LeftRootItemStyles,
  LeftRootItemTopStyles,
  LeftRootStyles,
  RootStyles,
  TextScoreStyles,
  TextStyles,
} from './ReviewScoreStyles';

const ReviewScore: React.FC<Props> = ({
  text,
}) => {
  const removeReview = text.slice(8);
  const createObjectForReview = removeReview.split(', ');
  const GameplayArray = new Array(createObjectForReview[0]);
  const GameplayScore = Number(GameplayArray[0].split(': ')[1]);
  const VisualsArray = new Array(createObjectForReview[1]);
  const VisualsScore = Number(VisualsArray[0].split(': ')[1]);
  const AudioArray = new Array(createObjectForReview[2]);
  const AuidoScore = Number(AudioArray[0].split(': ')[1]);
  const ConceptArray = new Array(createObjectForReview[3]);
  const ConceptScore = Number(ConceptArray[0].split(': ')[1]);
  const ValueArray = new Array(createObjectForReview[4]);
  const ValueScore = Number(ValueArray[0].split(': ')[1]);
  const ReviewScore = GameplayScore + VisualsScore + AuidoScore + ConceptScore + ValueScore;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={RootStyles}
    >
      <Grid
        item
        xs={7}
        container
        sx={LeftRootStyles}
      >
        <Grid
          item
          xs={12}
          container
          sx={LeftRootItemTopStyles}
        >
          <Grid
            item
            xs={8}
          >
            <Typography
              sx={TextStyles}
            >
              GAMEPLAY
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <Typography
              sx={TextScoreStyles}
            >
              {GameplayScore}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          sx={LeftRootItemStyles}
        >
          <Grid
            item
            xs={8}
          >
            <Typography
              sx={TextStyles}
            >
              VISUALS
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <Typography
              sx={TextScoreStyles}
            >
              {VisualsScore}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          sx={LeftRootItemStyles}
        >
          <Grid
            item
            xs={8}
          >
            <Typography
              sx={TextStyles}
            >
              AUDIO
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <Typography
              sx={TextScoreStyles}
            >
              {AuidoScore}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          sx={LeftRootItemStyles}
        >
          <Grid
            item
            xs={8}
          >
            <Typography
              sx={TextStyles}
            >
              CONCEPT
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <Typography
              sx={TextScoreStyles}
            >
              {ConceptScore}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          sx={LeftRootItemBottomStyles}
        >
          <Grid
            item
            xs={8}
          >
            <Typography
              sx={TextStyles}
            >
              VALUE
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <Typography
              sx={TextScoreStyles}
            >
              {ValueScore}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item 
        xs={5} 
        container
      >
        <Grid
          item
          xs={12}
        >
          <Typography
            sx={FinalScoreStyle}
          >
            {ReviewScore}
          </Typography>   
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            sx={AlignTextStyle}
          >
            OUT OF 25
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export type Props = {
  text: string;
};

export default ReviewScore;
