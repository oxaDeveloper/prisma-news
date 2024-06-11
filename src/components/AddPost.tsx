import axios from "axios";
import React, { useState } from "react";

interface Props {
  setAddPost: Function;
  fetchPosts: Function;
}

const AddPost = ({ setAddPost, fetchPosts }: Props) => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");

  const sendPost = async () => {
    await axios.post("/api/post", {
      title: title,
      excerpt: excerpt,
    });
    setAddPost(false);
    await fetchPosts();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Add Post</h2>

        <div>
          <div className="mb-4">
            <h1 className="mb-2 block text-gray-700">Title</h1>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded border px-3 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <h1 className="mb-2 block text-gray-700">Excerpt</h1>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full rounded border px-3 py-2"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 rounded bg-gray-500 px-4 py-2 text-white"
              onClick={() => {
                setAddPost(false);
              }}
            >
              Cancel
            </button>

            <button
              type="button"
              className="rounded bg-blue-500 px-4 py-2 text-white"
              onClick={() => {
                sendPost();
              }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
