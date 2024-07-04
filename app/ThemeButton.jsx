'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { SunIcon } from '@heroicons/react/24/solid';
import { MoonIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex items-center space-x-2">
      <Label htmlFor="dark-mode">{theme === 'dark' ? 'Dark' : 'Light'}</Label>
        <Switch
          id="dark-mode"
          checked={theme === 'dark'}
          onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </div>
    </>
  );
}
