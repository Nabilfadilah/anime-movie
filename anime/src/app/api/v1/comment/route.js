import prisma from "@/libs/prisma"

export async function POST(request) {
    try {
        // kalau punya data baru ya tinggal tambah parameter
        const { anime_mal_id, user_email, comment, username, anime_title } = await request.json()
        const data = { anime_mal_id, user_email, comment, username, anime_title }

        const createComment = await prisma.comment.create({data})

        if (!createComment) {
            return new Response(JSON.stringify({ status: 500, isCreated: false }), {
            status: 500,
            });
        }
  
        return new Response(JSON.stringify({ status: 200, isCreated: true }), {
            status: 200,
        });
    } catch (error) {
        console.error("Error creating comment:", error);
        return new Response(JSON.stringify({ status: 500, isCreated: false }), {
            status: 500,
        });
    }
}