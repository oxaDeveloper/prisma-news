import Link from "next/link";
import React from "react";

const News = ({ posts }: any) => {
  return (
    <div className="container mx-auto mt-4 w-full p-4">
      {posts.length !== 0 && <h1 className="mb-6 text-3xl font-bold">News</h1>}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <div
            key={post.id}
            className="min-w-[25rem] rounded bg-white p-4 shadow"
          >
            <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
            <p className="truncate-multiline mb-4 text-gray-600">
              {post.excerpt}
            </p>

            <Link href={`/post/${post.id}`}>
              <p className="text-blue-500 hover:underline">Read more</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
