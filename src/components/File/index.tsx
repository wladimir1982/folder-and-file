import React from 'react';

import { FileProps } from 'interfaces/interfaces';
import { Box } from '@mui/material';

class File extends React.Component<FileProps> {
  render() {
    const { name, mime } = this.props;

    return (
      <Box component="li">
        {name} ({mime})
      </Box>
    );
  }
}

export default File;
