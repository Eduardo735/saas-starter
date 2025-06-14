'use client';

import { SignedOut, SignInButton, SignUpButton, useUser } from '@clerk/nextjs';
import { Skeleton } from '../ui/skeleton';

export function JoinTurtleCommunity() {
  const { isLoaded } = useUser()

  if (!isLoaded)
    return <div className="space-x-4 space-y-2">
      <Skeleton className="h-3 w-[50px] bg-gray-400 dark:bg-gray-700" />
    </div>

  return (
    <SignedOut>
      <SignInButton mode="modal">
        <button className="btn">Iniciar sesión</button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button className="btn">Registrarse</button>
      </SignUpButton>
    </SignedOut>
  );
}
