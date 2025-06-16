import { createClerkClient } from '@clerk/backend';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })
const isPublicRoute = createRouteMatcher([
  '/api(.*)',
  '/',
])

const routeAccess = {
  Free: createRouteMatcher(['/home(.*)', '/settings(.*)']),
  Pro: createRouteMatcher(['/pro-home(.*)', '/settings(.*)']),
  Plus: createRouteMatcher(['/plus-home(.*)', '/settings(.*)']),
};

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  if (isPublicRoute(req)) return;

  if (!userId) return redirectToSignIn({ returnBackUrl: req.url });

  const user = await clerkClient.users.getUser(userId)
  const plan = user.privateMetadata?.plan || 'Free';
  const matcher = routeAccess[plan as keyof typeof routeAccess];

  if (!matcher || !matcher(req)) {
    if (plan === 'Free') {
      return NextResponse.rewrite(new URL('/home', req.url))
      // return redirect('/home')
    }
    if (plan === 'Pro') {
      return NextResponse.rewrite(new URL('/pro-home', req.url))
      // return redirect('/pro-home')
    }
    if (plan === 'Plus') {
      return NextResponse.rewrite(new URL('/plus-home', req.url))
      // return redirect('/plus-home')
    }
    // return redirect('/feed')
    return NextResponse.rewrite(new URL('/feed', req.url))
  }
}, { debug: true })

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)', // O ajusta según tus rutas
    '/(api|trpc)(.*)',
  ],
}
