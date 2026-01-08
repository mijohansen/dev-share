import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import Share from '@mui/icons-material/Share';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { Link } from '@tanstack/react-router';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  drawerWidth: number;
}

export function RepoMenu({ open, onClose, drawerWidth }: SidebarProps) {
  const menuItems = [
    { text: 'Home', icon: <Home fontSize={'medium'} />, to: '/' },
    { text: 'Shared Files', icon: <Share fontSize={'medium'} />, to: '/demo' },
    { text: 'Settings', icon: <Settings fontSize={'medium'} />, to: '/settings' },
  ];

  return (
    <Drawer
      variant="permanent"
      className={`w-[${drawerWidth}px] shrink-0 ${open ? 'block' : 'hidden'} md:block [&_.MuiDrawer-paper]:w-[${drawerWidth}px] [&_.MuiDrawer-paper]:box-border [&_.MuiDrawer-paper]:bg-[#0f172a] [&_.MuiDrawer-paper]:text-white [&_.MuiDrawer-paper]:border-r [&_.MuiDrawer-paper]:border-white/10`}
      open={open}
      onClose={onClose}
    >
      <Toolbar />
      <Box className="overflow-auto" onClick={onClose}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.to}
                className="hover:bg-cyan-400/10 active:text-cyan-400 [&.active]:text-cyan-400"
              >
                <ListItemIcon className="text-inherit min-w-[40px]">{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider className="bg-white/10 my-8" />
      </Box>
    </Drawer>
  );
}
