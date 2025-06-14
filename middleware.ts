import { createClerkClient } from '@clerk/backend';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

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
      return Response.redirect(new URL('/home', req.url));
    }
    if (plan === 'Pro') {
      return Response.redirect(new URL('/pro-home', req.url));
    }
    if (plan === 'Plus') {
      return Response.redirect(new URL('/plus-home', req.url));
    }
    return Response.redirect(new URL('/home', req.url));
  }
}, { debug: true })

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)', // O ajusta según tus rutas
    '/(api|trpc)(.*)',
  ],
}
