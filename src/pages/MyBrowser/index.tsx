import React from 'react';

import File from 'components/File';
import Folder from 'components/Folder';
import { Item, MyBrowserProps } from 'interfaces/interfaces';
import { Box, TextField } from '@mui/material';

import styles from './MyBrowser.module.scss';

interface MyBrowserState {
  searchTerm: string;
}

class MyBrowser extends React.Component<MyBrowserProps, MyBrowserState> {
  constructor(props: MyBrowserProps) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchTerm: event.target.value });
  };

  filterData = (data: Item[], query: string): Item[] => {
    if (!query) return data;

    const filteredData = [];
    for (const item of data) {
      if ('name' in item && item.name.toLowerCase().includes(query.toLowerCase())) {
        filteredData.push(item);
      } else if ('children' in item) {
        const filteredChildren = this.filterData(item.children as Item[], query);
        if (filteredChildren.length > 0) {
          const filteredFolder = { ...item, children: filteredChildren };
          filteredData.push(filteredFolder);
        }
      }
    }
    return filteredData;
  };

  render() {
    const { expandedFolders, data } = this.props;
    const { searchTerm } = this.state;
    const filteredData = this.filterData(data, searchTerm);

    return (
      <Box className={styles.mainContent}>
        <Box className={styles.container}>
          <TextField
            fullWidth
            type="text"
            placeholder="Search files..."
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          {filteredData.length ? (
            <Box component="ul" className={styles.list}>
              {filteredData.map((item: Item, index: number) => {
                if (item.type === 'FOLDER') {
                  return (
                    <Folder
                      key={index}
                      name={item.name}
                      childrenProps={(item.children as Item[]) || []}
                      expandedFolders={expandedFolders}
                    />
                  );
                } else {
                  return <File key={index} name={item.name} mime={item.mime || ''} />;
                }
              })}
            </Box>
          ) : (
            <Box className={styles.emptyBlock}>
              Sorry, there are no items matching your search. 😢 Try please again.
            </Box>
          )}
        </Box>
      </Box>
    );
  }
}

export default MyBrowser;
