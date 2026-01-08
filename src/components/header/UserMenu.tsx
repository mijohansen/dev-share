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
      <Text size="sm" className="text-white/70 hidden sm:block">
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
          <UnstyledButton className="ml-8">
            <Avatar
              alt={user.name || ''}
              src={user.image || ''}
              className="w-[35px] h-[35px] border-2 border-cyan-400 bg-slate-800"
              radius="xl"
            >
              {user.name?.charAt(0)}
            </Avatar>
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown className="bg-slate-800 text-white border border-white/10">
          <Menu.Item leftSection={<IconUser size={14} />} className="hover:bg-slate-700">
            Profile
          </Menu.Item>
          <Menu.Item leftSection={<IconSettings size={14} />} className="hover:bg-slate-700">
            Settings
          </Menu.Item>
          <Menu.Divider className="border-white/10" />
          <Menu.Item
            color="red"
            leftSection={<IconLogout size={14} />}
            onClick={() => {
              /* Add logout logic */
            }}
            className="hover:bg-slate-700"
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
