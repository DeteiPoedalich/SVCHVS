import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import { useThemeProps } from '@mui/material';

const ColorButton = styled(Button)(({theme,color})=>({
    color:theme.palette.getContrastText(color),
    backgroundColor:color,
    '&:hover':{
        backgroundColor:color,
    },
}))

export default function BasicButtons(props) {

  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained" color={props.color}>{props.text}</ColorButton>
    </Stack>
  );
}
