import React from 'react';
import Drawer from '@mui/material/Drawer';
import {Box} from '@mui/material';

interface SideBarProps {
  open: boolean;
  onClose: () => void;
  content: React.ReactNode;
  container?: Element;
}

const Sidebar: React.FC<SideBarProps> = ({
                                           open,
                                           content,
                                           container,
                                         }) => {
  return (
    <Drawer
      variant="persistent"
      container={container}
      anchor="left"
      open={open}
      sx={{height: '100%'}}
      ModalProps={{
        sx: {position: 'static'},
      }}
      PaperProps={{
        sx: {
          position: 'static',
          height: '83vh',
          overflowY: 'auto',
        },
      }}
    >
      <Box key={new Date().getTime()} sx={{width: 250}}>
        {content}
      </Box>
    </Drawer>


  );
};

export default Sidebar;
