import prisma from "@/libs/prisma"

export async function POST(request) {
    try {
        const { anime_mal_id, user_email } = await request.json()
        const data = { anime_mal_id, user_email }

        const createCollection = await prisma.conllection.create({data})

        if (!createCollection) {
            return new Response(JSON.stringify({ status: 500, isCreated: false }), {
            status: 500,
            });
        }
  
        return new Response(JSON.stringify({ status: 200, isCreated: true }), {
            status: 200,
        });
    } catch (error) {
        console.error("Error creating collection:", error);
        return new Response(JSON.stringify({ status: 500, isCreated: false }), {
            status: 500,
        });
    }
}