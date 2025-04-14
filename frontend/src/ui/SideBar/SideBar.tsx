import React from 'react';
import Drawer from '@mui/material/Drawer';
import {Box} from '@mui/material';

interface SideBarProps {
  open: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({open, onClose, content}) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{width: 300, p: 2}}>
        {content}
      </Box>
    </Drawer>
  );
};

export default SideBar;
