import { Role } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  user: any;
  fetchUsers: Function;
}

const Profile = ({ user, fetchUsers }: Props) => {
  const router = useRouter();

  const becomeAnAdmin = async () => {
    await axios.put("/api/user", {
      id: user.id,
      role: user.role !== "ADMIN" ? Role.USER : Role.ADMIN,
    });

    router.push("/");
  };

  const deleteAccount = async () => {
    await axios.delete(`/api/user?id=${user.id}`);
    router.push("/");
    await fetchUsers();
  };

  return (
    <div className="flex min-w-[30rem] flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="h-24 w-24">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
              alt=""
              width={1080}
              height={1080}
            />
          </div>

          <div className="leading-[30px]">
            <h1 className="text-3xl">{user.name}</h1>
            <p className="text-gray-400">{user.email}</p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2">
          <h1 className="text-xl">
            Role: <span className="text-gray-400">{user.role}</span>
          </h1>
          <button onClick={deleteAccount}>
            <h1 className="uppercase text-red-500">delete</h1>
          </button>
        </div>
      </div>

      <div
        className="cursor-pointer rounded-lg bg-blue-400 py-2 hover:bg-blue-500"
        onClick={() => becomeAnAdmin()}
      >
        <h1 className="text-center text-xl uppercase text-white">
          {user.role !== "ADMIN" ? "Become an admin" : "Become a user"}
        </h1>
      </div>
    </div>
  );
};

export default Profile;
