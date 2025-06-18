import { createClerkClient } from '@clerk/backend';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

const isPublicRoute = createRouteMatcher([
  '/api(.*)',
  '/',
]);

const routeAccess = {
  Free: createRouteMatcher(['/home(.*)', '/settings(.*)']),
  Pro: createRouteMatcher(['/pro-home(.*)', '/settings(.*)']),
  Plus: createRouteMatcher(['/plus-home(.*)', '/settings(.*)']),
};

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  if (isPublicRoute(req)) return;

  if (!userId) return redirectToSignIn({ returnBackUrl: req.url });

  const user = await clerkClient.users.getUser(userId);
  const plan = user.privateMetadata?.plan || 'Free';
  const matcher = routeAccess[plan as keyof typeof routeAccess];
  console.log('Subscription Plan :>> ', plan);

  if (!matcher || !matcher(req)) {
    if (plan === 'Free') {
      return NextResponse.redirect(new URL("/home", req.url));
    }
    if (plan === 'Base') {
      return NextResponse.redirect(new URL("/pro-home", req.url));
    }
    if (plan === 'Plus') {
      return NextResponse.redirect(new URL("/plus-home", req.url));
    }

    // fallback
    return NextResponse.redirect(new URL("/home", req.url));
  }
});

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};
