import { signUpAfterClerk } from '@/app/(login)/actions';
import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const evt = await verifyWebhook(req)
        let userAfterSignUp;
        const { id } = evt.data
        const eventType = evt.type
        console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
        if (evt.type === 'user.created') {
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
            userAfterSignUp = await signUpAfterClerk(userObj);

        }

        return new Response(
            JSON.stringify({ message: 'Webhook received', data: userAfterSignUp }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        )
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error verifying webhook', { status: 400 })
    }
}