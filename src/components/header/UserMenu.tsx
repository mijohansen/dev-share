import { Avatar, Group, Menu, Text, UnstyledButton } from '@mantine/core';
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react';
import { useState } from 'react';

interface UserMenuProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function UserMenu({ user }: UserMenuProps) {
  const [opened, setOpened] = useState(false);

  return (
    <Group gap="lg">
      <Text size="sm" c="white" opacity={0.7} visibleFrom="sm">
        {user.name}
      </Text>

      <Menu
        width={200}
        position="bottom-end"
        transitionProps={{ transition: 'pop-top-right' }}
        opened={opened}
        onChange={setOpened}
        withinPortal
      >
        <Menu.Target>
          <UnstyledButton ml="xl">
            <Avatar alt={user.name || ''} src={user.image || ''} variant={'filled'} size={'md'} radius="xl">
              {user.name?.charAt(0)}
            </Avatar>
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            leftSection={<IconUser size={14} />}
            style={{ '&:hover': { backgroundColor: 'var(--mantine-color-dark-4)' } }}
          >
            Profile
          </Menu.Item>
          <Menu.Item
            leftSection={<IconSettings size={14} />}
            style={{ '&:hover': { backgroundColor: 'var(--mantine-color-dark-4)' } }}
          >
            Settings
          </Menu.Item>
          <Menu.Divider style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          <Menu.Item
            color="red"
            leftSection={<IconLogout size={14} />}
            onClick={() => {
              /* Add logout logic */
            }}
            style={{ '&:hover': { backgroundColor: 'var(--mantine-color-dark-4)' } }}
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
