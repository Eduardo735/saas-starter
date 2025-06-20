'use client';

import { CircleIcon } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
// import { UserMenu } from '../(dashboard)/layout';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <CircleIcon className="h-6 w-6 text-orange-500" />
          <span className="ml-2 text-xl font-semibold text-gray-900">ACME</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Suspense fallback={<div className="h-9" />}>
            {/* <UserMenu /> */}
          </Suspense>
        </div>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      {/* <Header /> */}
      {children}
    </section>
  );
}
