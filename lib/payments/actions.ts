'use server';

import { redirect } from 'next/navigation';
import { createCheckoutSession, createCustomerPortalSession } from './stripe';
import { withTeam } from '@/lib/auth/middleware';

export const checkoutAction = withTeam(async (formData, team) => {
  console.log('formData, team :>> ', formData, team);
  const priceId = formData.get('priceId') as string;
  console.log('priceId :>> ', priceId);
  await createCheckoutSession({ team: team, priceId });
  // return
});

export const customerPortalAction = withTeam(async (_, team) => {
  const portalSession = await createCustomerPortalSession(team);
  redirect(portalSession.url);
});
