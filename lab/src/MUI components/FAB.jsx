import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import {styled} from '@mui/material/styles';
import { useThemeProps } from '@mui/material';

const ColorFAB = styled(FAB)(({theme,color})=>({
    color:theme.palette.getContrastText(color),
    backgroundColor:color,
    '&:hover':{
        backgroundColor:color,
    },
}))

export default function FAB(props) {

  return (
    <Fab color="rgb(0,0,0)" aria-label="add" onClick={props.mod}>
  <AddIcon/>
</Fab>
  );
}
