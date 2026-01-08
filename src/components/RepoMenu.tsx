import { Divider, NavLink, Stack } from '@mantine/core';
import { IconHome, IconSettings, IconShare } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

export function RepoMenu() {
  const menuItems = [
    { text: 'Home', icon: <IconHome size={20} />, to: '/' },
    { text: 'Shared Files', icon: <IconShare size={20} />, to: '/demo' },
    { text: 'Settings', icon: <IconSettings size={20} />, to: '/settings' },
  ];

  return (
    <Stack gap={0} p="xs">
      {menuItems.map((item) => (
        <NavLink
          key={item.text}
          component={Link}
          to={item.to}
          label={item.text}
          leftSection={item.icon}
          c="white"
          style={{
            borderRadius: 'var(--mantine-radius-md)',
            transition: 'background-color 200ms ease',
            '&:hover': { backgroundColor: 'rgba(34, 184, 207, 0.1)' },
            '&[data-active]': { color: 'var(--mantine-color-cyan-4)', backgroundColor: 'rgba(34, 184, 207, 0.1)' },
          }}
        />
      ))}
      <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} my="md" />
    </Stack>
  );
}
