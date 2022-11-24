import React from 'react';
import {
  CardMain,
  CardImage,
  BoxFlex,
  FlexCardContent,
  AlignedFavoriteBorderIcon,
  AlignedFavoriteIcon,
  HostelNameText,
  RatingButton,
  DistanceText,
  PriceText,
  CurrencyText,
  PriceCard,
  FromText,
} from './CardStyles';

import { Star as StarIcon } from '@mui/icons-material';

const CardComponent = ({ name, distance, rating, startingFrom }) => {
  const [isFavourite, setIsFavourite] = React.useState(false);
  return (
    <CardMain>
      <CardImage
        component='img'
        image={require('../Assets/Hostel-Image.png')}
      />
      <BoxFlex>
        <FlexCardContent>
          {isFavourite ? (
            <AlignedFavoriteIcon onClick={() => setIsFavourite(!isFavourite)} />
          ) : (
            <AlignedFavoriteBorderIcon
              onClick={() => setIsFavourite(!isFavourite)}
            />
          )}
          <HostelNameText variant='h6' component='div'>
            {name}
          </HostelNameText>
          <DistanceText variant='p' component='p'>
            {distance}
          </DistanceText>
          <RatingButton
            variant='raised'
            startIcon={<StarIcon sx={{ color: '#FFD600' }} />}
          >
            {rating}
          </RatingButton>
        </FlexCardContent>
        <PriceCard>
          <FromText variant='p' component='span'>
            From
          </FromText>
          <CurrencyText variant='h5' component='span'>
            PKRs
            <PriceText variant='h2' component='span'>
              {startingFrom}
            </PriceText>
          </CurrencyText>
        </PriceCard>
      </BoxFlex>
    </CardMain>
  );
};

export default CardComponent;
