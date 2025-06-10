// // import { getUser } from '@/lib/db/queries';

// // export async function GET() {
// //   const user = await getUser();
// //   return Response.json(user);
// // }
// import { auth, clerkClient } from '@clerk/nextjs/server';

// export async function GET(req: Request) {
//   const { userId } = auth();
//   console.log('auth :>> ', auth);
//   if (!userId) {
//     return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
//   }

//   const user = await clerkClient.users.getUser(userId);

//   return new Response(JSON.stringify(user));
// }
import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
export async function GET() {
  const user = await currentUser()

  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }

  return NextResponse.json({ user })
}