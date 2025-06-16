"use client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Turtles Traders',
  description: 'Get started quickly Turtles Traders.'
};

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <section className="flex flex-col min-h-screen">
      {children}
    </section>
  );
}
