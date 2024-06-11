import { Role } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface Props {
  users: Array<string | Role>;
  setAddNewAccount: Function;
  currentUser: string | null;
  setUser: Function;
}

const AccountModal = ({
  users,
  setAddNewAccount,
  currentUser,
  setUser,
}: Props) => {
  return (
    <div className="fixed right-20 top-14 min-w-[17rem] rounded-lg bg-white p-5 shadow-xl">
      <div className="flex flex-col gap-3">
        {users.map((user: any) => (
          <div
            className="flex cursor-pointer items-center justify-between rounded-lg px-3.5 py-2 hover:bg-gray-200"
            onClick={() => {
              if (currentUser === user.id) {
                setUser(null);
              } else {
                setUser(user.id);
              }
            }}
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
                  alt=""
                  width={1080}
                  height={1080}
                />
              </div>
              <div className="leading-5">
                <h1 className="">{user.name}</h1>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>

            {currentUser === user.id && (
              <div className="h-4 w-4">
                <Image
                  src="https://www.freepnglogos.com/uploads/tick-png/check-mark-tick-vector-graphic-21.png"
                  alt=""
                  width={1080}
                  height={1080}
                />
              </div>
            )}
          </div>
        ))}

        <div className="border-b border-gray-300" />

        <div
          className="flex cursor-pointer items-center gap-3 rounded-lg bg-gray-200 px-3.5 py-3 hover:bg-slate-300"
          onClick={() => setAddNewAccount(true)}
        >
          <p>+ Add Account</p>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
