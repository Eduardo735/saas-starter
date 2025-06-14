// // 'use server';

// // import webpush from 'web-push';

// // webpush.setVapidDetails
// //  ( 'mailto:contacto@internautacapital.com>',
// //   process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
// //   process.env.VAPID_PRIVATE_KEY
// // )

// // let subscription= null;

// // export async function subscribeUser(sub) {
// //   subscription = sub;
// //   // In a production environment, you would want to store the subscription in a database
// //   // For example: await db.subscriptions.create({ data: sub })
// //   return { success: true };
// // }

// // export async function unsubscribeUser() {
// //   subscription = null;
// //   // In a production environment, you would want to remove the subscription from the database
// //   // For example: await db.subscriptions.delete({ where: { ... } })
// //   return { success: true };
// // }

// // export async function sendNotification(message) {
// //   console.log('No subscription available :>> ',message,subscription);
// //   if (!subscription) {
// //     throw new Error('No subscription available');
// //   }

// //   try {
// //     console.log('object :>> ');
// //     await webpush.sendNotification(
// //       subscription,
// //       JSON.stringify({
// //         title: 'Test Notification',
// //         body: message,
// //         icon: '/icon.png',
// //       })
// //     );
// //     console.log('webpush :>> ');
// //     return { success: true };
// //   } catch (error) {
// //     console.error('Error sending push notification:', error);
// //     return { success: false, error: 'Failed to send notification' };
// //   }
// // }
// import webpush from 'web-push'
// import type { PushSubscription } from 'web-push'

// // Configurar VAPID
// webpush.setVapidDetails(
//   'mailto:contacto@internautacapital.com',
//   process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
//   process.env.VAPID_PRIVATE_KEY!
// )

// // Tipar la suscripción
// let subscription: PushSubscription | null = null

// // Tipar entrada como PushSubscription
// export async function subscribeUser(sub: PushSubscription) {
//   subscription = sub
//   // En producción, almacena la suscripción en base de datos
//   return { success: true }
// }

// export async function unsubscribeUser() {
//   subscription = null
//   // En producción, elimina la suscripción de la base de datos
//   return { success: true }
// }

// export async function sendNotification(message: string) {
//   console.log('Intentando enviar notificación con mensaje:', message)
//   if (!subscription) {
//     throw new Error('No subscription available')
//   }

//   try {
//     await webpush.sendNotification(
//       subscription,
//       JSON.stringify({
//         title: 'Test Notification',
//         body: message,
//         icon: '/icon.png'
//       })
//     )
//     console.log('Notificación enviada correctamente')
//     return { success: true }
//   } catch (error) {
//     console.error('Error sending push notification:', error)
//     return { success: false, error: 'Failed to send notification' }
//   }
// }