import * as React from 'react';
import Box from '@mui/material/Box';
import Divider, { dividerClasses } from '@mui/material/Divider';

export default function VerticalDividers() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'black',
        borderRadius: 1,
        width:"100%",
        margin:"2% 0 2% 0",
        bgcolor: 'background.paper',
        color: 'black',
        '& svg': {
          m: 1,
        },
        [`& .${dividerClasses.root}`]: {
          mx: 0.5,
        },
      }}
    >

      <Divider orientation="horizontal" flexItem />
    </Box>
  );
}