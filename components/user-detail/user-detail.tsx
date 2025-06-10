'use client';

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function UserMenu() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { data: user } = useSWR<User>('/api/user', fetcher);


  const router = useRouter();

  // async function handleSignOut() {
  //   await signOut();
  //   router.refresh();
  //   router.push('/');
  // }

  return (
    <>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
