'use client';

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
// import { useRouter } from 'next/navigation';

export function UserDetail() {
  // const router = useRouter();

  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="btn">Iniciar sesión</button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="btn">Registrarse</button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
