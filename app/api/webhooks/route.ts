import { signUpAfterClerk } from '@/app/(login)/actions';
import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const evt = await verifyWebhook(req)

        const { id } = evt.data
        const eventType = evt.type
        console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
        console.log('Webhook payload:', evt.data)
        if (evt.type === 'user.created') {
            console.log('Webhook payload:', evt.data)
            const { id, email_addresses, ...rest } = evt.data;
            const userObj = {
                id,
                email: email_addresses?.[0]?.email_address ?? null,
                email_addresses,
                password: null,
                inviteId: null,
                userId: id,
            };
            console.log('Webhook payload  userObj:', userObj)
            const object = signUpAfterClerk(userObj);

            console.log('object :>> ', object);
        }
        console.log('object finish :>> ');

        return new Response('Webhook received', { status: 200 })
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error verifying webhook', { status: 400 })
    }
}