import type { NextApiRequest, NextApiResponse } from "next";
import {
  createPost,
  deletePost,
  getAllPosts,
  editPost,
} from "~/server/lib/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { title, excerpt } = req.body;
    const newPost = await createPost({ title, excerpt });
    return res.status(201).json(newPost);
  } else if (req.method === "GET") {
    const getPosts = await getAllPosts();
    return res.status(200).json(getPosts);
  } else if (req.method === "PUT") {
    const { id, title, excerpt } = req.body;
    await editPost(id, title, excerpt);
    return res.status(200).json({ message: "Post edited!" });
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    await deletePost(id);
    return res.status(200).json({ message: "Post deleted!" });
  }
}
