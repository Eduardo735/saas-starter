import { getUserDb } from '@/app/lib/db/queries';
import { currentUser } from '@clerk/nextjs/server';

export async function GET() {
  const userClerk = await currentUser()
  const idWebapp = userClerk?.privateMetadata.id_webapp;
  const userLegacyDatabase = await getUserDb(idWebapp as string);
  return Response.json(userLegacyDatabase);
}