import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isPublicRoute = createRouteMatcher(['/sign-in(.*)'])
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  "/api/*",
  '/tools/feed(.*)',
  '/pricing(.*)',
])

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
// ✅ Rutas protegidas
// const protectedRoutes = ['/dashboard', '/now',];

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const sessionCookie = request.cookies.get('session');

//   // ✅ Verifica si la ruta es protegida
//   const isProtectedRoute = protectedRoutes.some((route) =>
//     pathname.startsWith(route)
//   );

//   if (isProtectedRoute && !sessionCookie) {
//     return NextResponse.redirect(new URL('/sign-in', request.url));
//   }

//   let res = NextResponse.next();

//   if (sessionCookie && request.method === 'GET') {
//     try {
//       const parsed = await verifyToken(sessionCookie.value);
//       const expiresInOneDay = new Date(Date.now() + 24 * 60 * 60 * 1000);

//       res.cookies.set({
//         name: 'session',
//         value: await signToken({
//           ...parsed,
//           expires: expiresInOneDay.toISOString()
//         }),
//         httpOnly: true,
//         secure: true,
//         sameSite: 'lax',
//         expires: expiresInOneDay
//       });
//     } catch (error) {
//       console.error('Error updating session:', error);
//       res.cookies.delete('session');

//       if (isProtectedRoute) {
//         return NextResponse.redirect(new URL('/sign-in', request.url));
//       }
//     }
//   }

//   return res;
// }
