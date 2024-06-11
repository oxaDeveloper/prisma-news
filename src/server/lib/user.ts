import { Role } from "@prisma/client";
import { prisma } from "~/server/db";

interface Props {
  name: string;
  email: string;
}

export const createUser = async ({ name, email }: Props) => {
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  return user;
};

export const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const becomeAnAdmin = async (id: string, role: Role) => {
  const user = await prisma.user.update({
    where: { id: id },
    data: {
      role: role,
    },
  });
  return user;
};

export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: { id: id },
  });
  return user;
};
