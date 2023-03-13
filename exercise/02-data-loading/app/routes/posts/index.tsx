import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";

async function getPosts() {
  return prisma.
};

export const loader = async () => {
  
  return json({ posts: await getPosts() }); 
};


export default function Posts() {
  const { posts } = useLoaderData<typeof loader>(); 
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
          );
        })}
      </ul>
    </main>
  );
}
