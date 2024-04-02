import * as React from 'react';

import Rating from '@mui/material/Rating';


// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

export default function TextRating() {
//   const value = 3.5;

  return (
    
      

<Rating name="half-rating"  defaultValue={3} precision={0.5} />
     


  );
}