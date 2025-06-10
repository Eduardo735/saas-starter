// import { clerkClient } from "@clerk/nextjs/server";
// import { buffer } from "micro";
// import { Webhook } from "svix";
// // import { prisma } from "@/lib/prisma"; // ajusta esto a tu ruta real

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

// export default async function handler(req, res) {
//     if (req.method !== "POST") return res.status(405).end();

//     const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || "");

//     let evt;
//     try {
//         const payload = (await buffer(req)).toString();
//         const headers = req.headers;
//         evt = wh.verify(payload, headers);
//     } catch (err) {
//         return res.status(400).json({ error: "Invalid webhook signature" });
//     }

//     const eventType = evt.type;

//     if (eventType === "user.created") {
//         const { id } = evt.data;

//         // 🔐 INICIO DE TRANSACCIÓN SEGURA
//         // const assignedId = await prisma.$transaction(async (tx) => {
//         //     const current = await tx.clerkUserCounter.upsert({
//         //         where: { id: 1 },
//         //         update: { counter: { increment: 1 } },
//         //         create: { id: 1, counter: 1 },
//         //     });

//         //     const padded = String(current.counter).padStart(5, "0");
//         //     const customId = `cliente-${padded}`;

//         //     await clerkClient.users.updateUser(id, {
//         //         customId,
//         //     });

//         //     return customId;
//         // });

//         console.log("Usuario actualizado con customId:", assignedId);
//     }

//     return res.status(200).json({ success: true });
// }
