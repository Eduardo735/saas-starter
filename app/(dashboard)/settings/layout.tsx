'use client';

import { Button } from '@/app/components/ui/button';
import { JoinTurtleCommunity } from '@/app/components/user-detail/join-turtle-community';
import { UserAvatarInfo } from '@/app/components/user-detail/user-avatar-info';
import { Activity, ChartArea, Menu, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense, useState } from 'react';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { href: '/settings', icon: Users, label: 'Team' },
    { href: '/settings/general', icon: Settings, label: 'General' },
    { href: '/settings/activity', icon: Activity, label: 'Activity' },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100dvh-68px)] max-w-7xl mx-auto w-full">
      {/* Mobile header */}
      <div className="lg:hidden flex items-center justify-between bg-white border-b border-gray-200 p-4">
        <div className="flex items-center">
          <span className="font-medium">Settings</span>
        </div>
        <div className='flex gap-x-2 items-center'>
          <Button
            className="-mr-3"
            variant="ghost"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden h-full">
        {/* Sidebar */}
        <aside
          className={`w-64 bg-white lg:bg-gray-50 border-r border-gray-200 lg:block ${isSidebarOpen ? 'block' : 'hidden'
            } lg:relative absolute inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className='flex justify-start gap-5 mt-5'>
            <Suspense fallback={<div className="h-9" />}>
              <JoinTurtleCommunity />
              <UserAvatarInfo />
            </Suspense> </div>

          <nav className="h-full overflow-y-auto p-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} passHref>
                <Button
                  variant={pathname === item.href ? 'secondary' : 'ghost'}
                  className={`shadow-none my-1 w-full justify-start ${pathname === item.href ? 'bg-gray-100' : ''
                    }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link href={'/home'} passHref>
              <Button
                variant={'ghost'}
                className={`shadow-none my-1 w-full justify-start }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <ChartArea className="h-4 w-4" />
                Ir a la aplicación
              </Button>
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-0">
          {/* <MinimalNavbar /> */}
          {children}</main>
      </div>
    </div>
  );
}
