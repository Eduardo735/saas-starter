'use client';

import { SignedIn, UserButton, useUser } from '@clerk/nextjs';
import { Skeleton } from '../ui/skeleton';

export function UserAvatarInfo() {
  const { isLoaded } = useUser()

  if (!isLoaded)
    return <Skeleton className="h-7 w-7 rounded-full bg-gray-400 dark:bg-gray-700" />

  return (
    <UserButton />
  );
}
