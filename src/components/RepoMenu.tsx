import { Box, Divider, NavLink, Stack } from '@mantine/core';
import { IconHome, IconSettings, IconShare } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  drawerWidth: number;
}

export function RepoMenu({ open, onClose, drawerWidth }: SidebarProps) {
  const menuItems = [
    { text: 'Home', icon: <IconHome size={20} />, to: '/' },
    { text: 'Shared Files', icon: <IconShare size={20} />, to: '/demo' },
    { text: 'Settings', icon: <IconSettings size={20} />, to: '/settings' },
  ];

  return (
    <Box
      component="nav"
      className={`fixed left-0 top-16 bottom-0 w-[${drawerWidth}px] bg-[#0f172a] text-white border-r border-white/10 z-[100] ${open ? 'block' : 'hidden'} md:block overflow-auto`}
    >
      <Stack gap={0} p="xs" onClick={onClose}>
        {menuItems.map((item) => (
          <NavLink
            key={item.text}
            component={Link}
            to={item.to}
            label={item.text}
            leftSection={item.icon}
            className="hover:bg-cyan-400/10 text-white rounded-md transition-colors [&.active]:text-cyan-400 [&.active]:bg-cyan-400/10"
          />
        ))}
        <Divider className="border-white/10 my-4" />
      </Stack>
    </Box>
  );
}
