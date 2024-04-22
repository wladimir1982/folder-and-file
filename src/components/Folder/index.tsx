import React from 'react';

import File from 'components/File';
import { FolderProps } from 'interfaces/interfaces';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

import styles from './Folder.module.scss';

interface FolderState {
  collapsed: boolean;
}

class Folder extends React.Component<FolderProps, FolderState> {
  constructor(props: FolderProps) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  componentDidMount(): void {
    const { expandedFolders, name } = this.props;
    if (expandedFolders && expandedFolders.includes(name)) {
      this.setState({ collapsed: false });
    }
  }

  toggleCollapse = (): void => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }));
  };

  render() {
    const { name, childrenProps, expandedFolders } = this.props;
    const { collapsed } = this.state;
    const IconComponent = collapsed ? AddCircleOutline : RemoveCircleOutline;

    return (
      <Box component="li">
        <Box className={styles.folderTitleBlock}>
          <Box component="span">
            <IconButton sx={{ color: '#DC143C' }} size="small" onClick={this.toggleCollapse}>
              <IconComponent sx={{ width: 25, height: 25 }} />
            </IconButton>
          </Box>
          <Box component="span" className={styles.folderName}>
            {name}
          </Box>
        </Box>
        <Box component="ul" className={styles.folderChildrenList}>
          {!collapsed &&
            childrenProps.map((item, index) => {
              if (item.type === 'FOLDER') {
                return (
                  <Folder
                    key={index}
                    name={item.name}
                    childrenProps={item.children || []}
                    expandedFolders={expandedFolders}
                  />
                );
              } else {
                return <File key={index} name={item.name} mime={item.mime || ''} />;
              }
            })}
        </Box>
      </Box>
    );
  }
}

export default Folder;
