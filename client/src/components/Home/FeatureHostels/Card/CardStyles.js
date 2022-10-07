export const cardStyles = {
  main: { display: 'flex', width: 412, height: 249, borderRadius: 3 },
  boxFlex: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  favouriteIcon: {
    alignSelf: 'flex-end',
    color: '#FF6600',
    cursor: 'pointer',
  },
  favouriteBorderIcon: { alignSelf: 'flex-end', cursor: 'pointer' },
  hostelName: {
    fontSize: 18,
    fontWeight: 700,
    color: '#4D148C',
    fontFamily: '"League Spartan", sans-serif',
  },
  distance: {
    fontSize: 12,
    color: '#606060',
    fontWeight: 400,
    fontFamily: "'Lato', sans-serif",
  },
  ratingButton: {
    backgroundColor: '#4D148C',
    marginTop: '14px',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#4D148C',
      cursor: 'default',
    },
    width: '70px',
    borderRadius: '3px',
  },
  pricingLabel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    display: 'flex',
  },
  from: {
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: '"League Spartan", sans-serif',
    marginBottom: '1px',
  },
  currency: {
    fontSize: '16px',
    fontWeight: 700,
    fontFamily: '"League Spartan", sans-serif',
    marginLeft: '5px',
    color: '#FF6B00',
  },
  price: {
    fontSize: '20px',
    fontWeight: 700,
    fontFamily: '"League Spartan", sans-serif',
    marginLeft: '5px',
  },
};
