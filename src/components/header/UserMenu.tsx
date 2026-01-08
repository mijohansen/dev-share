import { Logout, Person, Settings } from '@mui/icons-material';
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';

interface UserMenuProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function UserMenu({ user }: UserMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="flex items-center gap-8">
      <Typography variant="body2" className="text-white/70 hidden sm:block">
        {user.name}
      </Typography>

      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          className="ml-8"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            alt={user.name || ''}
            src={user.image || ''}
            className="w-[35px] h-[35px] border-2 border-cyan-400 bg-slate-800"
          >
            {user.name?.charAt(0)}
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          className:
            'overflow-visible drop-shadow-[0px_2px_8px_rgba(0,0,0,0.32)] mt-6 bg-slate-800 text-white border border-white/10 [&_.MuiAvatar-root]:w-8 [&_.MuiAvatar-root]:h-8 [&_.MuiAvatar-root]:-ml-2 [&_.MuiAvatar-root]:mr-4',
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Person fontSize={'small'} />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize={'small'} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider className="bg-white/10" />
        <MenuItem
          onClick={() => {
            /* Add logout logic */
          }}
        >
          <ListItemIcon>
            <Logout fontSize={'small'} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
