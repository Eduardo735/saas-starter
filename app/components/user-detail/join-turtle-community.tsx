'use client';

import { SignedOut, SignInButton, SignUpButton, useUser } from '@clerk/nextjs';
import { Skeleton } from '../ui/skeleton';

export function JoinTurtleCommunity() {
  const { isLoaded } = useUser()

  if (!isLoaded)
    return <div className="flex items-center justify-center gap-x-2 mr-2">
      <Skeleton className="h-3 w-[50px] bg-gray-400 dark:bg-gray-700" />
    </div>

  return (
    <div className='flex items-center justify-center gap-x-2'>
      <SignedOut>
        <div>
          <SignInButton mode="modal">
            <button className="btn hover:text-green-800">Iniciar sesión</button>
          </SignInButton>
        </div>
        <div>
          <SignUpButton mode="modal">
            <button className="btn hover:text-green-800">Registrarse</button>
          </SignUpButton>
        </div>
      </SignedOut>
    </div >
  );
}
