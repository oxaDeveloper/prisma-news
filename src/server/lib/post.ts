import { prisma } from "~/server/db";

interface Props {
  title: string;
  excerpt: string;
}

export const createPost = async ({ title, excerpt }: Props) => {
  const post = await prisma.post.create({
    data: {
      title,
      excerpt,
    },
  });

  return post;
};

export const getAllPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

export const editPost = async (id: string, title: string, excerpt: string) => {
  const post = await prisma.post.update({
    where: { id: id },
    data: {
      title: title,
      excerpt: excerpt,
    },
  });
  return post;
};

export const deletePost = async (id: string) => {
  const post = await prisma.post.delete({
    where: { id: id },
  });
  return post;
};
