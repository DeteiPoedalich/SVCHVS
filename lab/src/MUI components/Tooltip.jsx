import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function BasicTooltip(props) {
  return (
    <Tooltip title="Cart">
      <IconButton>
        <img src={props.img} alt="" />
      </IconButton>
    </Tooltip>
  );
}