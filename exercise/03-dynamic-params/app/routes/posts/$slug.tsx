import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getPost } from "~/models/post.server";

export async function loader({ params }: LoaderArgs) {
  return json({
    post: await getPost(params.slug),
  });
}

export default function Post() {
    const { post } = useLoaderData<typeof loader>();
    if (post !== null) {
        return (
            <main className="mx-auto max-w-4xl">
            <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
            </main>
        );
    }
    else {
        return (
            <main className="mx-auto max-w-4xl">
            <h1 className="my-6 border-b-2 text-center text-3xl">Post not found</h1>
            </main>
        );
    }
}